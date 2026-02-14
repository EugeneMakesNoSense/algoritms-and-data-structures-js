import { describe, it } from "node:test";
import assert from "node:assert/strict";

class Test {
  async update(
    id: number,
    { productId, items, currencies }: UpdateInAppOfferParamsInterface,
  ): Promise<UpdateInAppOfferReturnInterface> {
    const existingInAppOffer = await this.inAppOffersRepository.findOneById(id);
    if (!existingInAppOffer) {
      throw new NotFoundException(`In-app offer with id = ${id} not found`);
    }

    const isDeleteCurrencies =
      Array.isArray(currencies) && currencies.length === 0;
    const isUpdateCurrencies =
      Array.isArray(currencies) && currencies.length > 0;
    const isSkipCurrenciesUpdate = currencies === undefined;

    const isDeleteItems = Array.isArray(items) && items.length === 0;
    const isUpdateItems = Array.isArray(items) && items.length > 0;
    const isSkipItemsUpdate = items === undefined;

    if (!productId && isSkipItemsUpdate && isSkipCurrenciesUpdate) {
      throw new BadRequestException(
        "At least one field (productId, currencies, or items) must be provided for update",
      );
    }

    if (isDeleteCurrencies && isDeleteItems) {
      throw new BadRequestException(
        "Offer must have at least one currency or item",
      );
    }

    if (isDeleteCurrencies && isSkipItemsUpdate) {
      const existingItems =
        await this.inAppOfferItemsRepository.findByOfferId(id);
      if (existingItems.length === 0) {
        throw new BadRequestException(
          "Offer must have at least one currency or item",
        );
      }
    }

    if (isDeleteItems && isSkipCurrenciesUpdate) {
      const existingCurrencies =
        await this.inAppOfferCurrenciesRepository.findByOfferId(id);
      if (existingCurrencies.length === 0) {
        throw new BadRequestException(
          "Offer must have at least one currency or item",
        );
      }
    }

    if (productId) {
      const inAppOfferWithSameProductId =
        await this.inAppOffersRepository.findOneByProductId(productId);
      if (
        inAppOfferWithSameProductId &&
        inAppOfferWithSameProductId.id !== id
      ) {
        throw new BadRequestException(
          `In-app offer with productId = ${productId} already exists`,
        );
      }
    }

    const existingCurrencies = await this.currencyService.getCurrencies();
    if (currencies) {
      if (
        currencies.some(
          (currency) =>
            !existingCurrencies.find((c) => c.code === currency.code),
        )
      ) {
        throw new NotFoundException(`One or more currencies not found`);
      }
    }

    if (items && items.length > 0) {
      const existingItems = await this.itemService.existItemsByIds(
        items.map((item) => item.itemId),
      );
      if (existingItems.length !== items.length) {
        throw new NotFoundException(`One or more items not found`);
      }
    }

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      if (productId) {
        await this.inAppOffersRepository.update(queryRunner, id, { productId });
      }

      if (isDeleteItems) {
        await this.inAppOfferItemsRepository.removeByOfferId(queryRunner, id);
      }

      if (isUpdateItems) {
        await this.inAppOfferItemsRepository.removeByOfferId(queryRunner, id);

        await this.inAppOfferItemsRepository.bulkCreate(
          queryRunner,
          items.map((item) => ({
            offerId: id,
            itemId: item.itemId,
            amount: item.amount,
          })),
        );
      }

      if (isDeleteCurrencies) {
        await this.inAppOfferCurrenciesRepository.removeByOfferId(
          queryRunner,
          id,
        );
      }

      if (isUpdateCurrencies) {
        await this.inAppOfferCurrenciesRepository.removeByOfferId(
          queryRunner,
          id,
        );

        await this.inAppOfferCurrenciesRepository.bulkCreate(
            queryRunner,
            currencies.map((currency) => ({
              offerId: id,
              currencyId: existingCurrencies.find(
                (c) => c.code === currency.code,
              )!.id,
              amount: currency.amount,
            })),
        );
      }

      await queryRunner.commitTransaction();

      return await this.findOne(id);
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
