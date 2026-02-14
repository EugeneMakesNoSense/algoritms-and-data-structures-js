class TrieNode extends Map<string, TrieNode | null> {}

export class Trie {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let currentNode = this.root;

        for (const char of word) {
            if (!currentNode.has(char)) {
                currentNode.set(char, new TrieNode());
            }

            currentNode = currentNode.get(char)!;
        }

        currentNode.set('*', null);
    }

    searchPrefix(word: string): boolean {
        let currentNode = this.root;

        for (const char of word) {
            if (!currentNode.has(char)) {
                return false;
            }

            currentNode = currentNode.get(char)!;
        }

        return true;
    }

    search(word: string): boolean {
        let currentNode = this.root;

        for (const char of word) {
            if (!currentNode.has(char)) {
                return false;
            }

            currentNode = currentNode.get(char)!;
        }

        return currentNode.has('*');
    }

    private collectWords(node: TrieNode, prefix: string, words: string[]): void {
        if (node.has('*')) {
            words.push(prefix);
        }

        for (const [char, childNode] of node) {
            if (childNode) {
                this.collectWords(childNode, prefix + char, words);
            }
        }
    }

    getAllWords(): string[] {
        const words: string[] = [];

        this.collectWords(this.root, '', words);

        return words;
    }

    autocomplete(prefix: string): string[] {
        let currentNode = this.root;

        for (const char of prefix) {
            if (!currentNode.has(char)) {
                return [];
            }

            currentNode = currentNode.get(char)!;
        }

        const words: string[] = [];

        this.collectWords(currentNode, prefix, words);

        return words;
    }

    autocorrect(word: string): string[] {
        let tempWord = word;

        while (tempWord.length > 0) {
            const suggestions = this.autocomplete(tempWord);

            if (suggestions.length > 0) {
                return suggestions;
            }

            tempWord = tempWord.slice(0, -1);
        }

        return [];
    }
}   
