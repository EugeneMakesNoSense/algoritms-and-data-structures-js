const compareTreesRecursive = (firstNode, secondNode) => {
    if (firstNode?.value !== secondNode?.value) {
        return false
    }

    if (firstNode?.children?.length !== secondNode?.children?.length) {
        return false
    }

    for (let i = 0; i < firstNode?.children?.length; i++) {
        const isNEqual = compareTreesRecursive(firstNode.children[i], secondNode.children[i])

        if (!isNEqual) {
            return false
        }
    }

    return true
}


export const compareTrees = (firstTree, secondTree) => {
    const firstRoot = firstTree.root
    const secondRoot = secondTree.root

    return compareTreesRecursive(firstRoot, secondRoot)
}