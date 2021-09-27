import TrieNode from './TrieNode';

// Ký tự ta sẽ dùng cho nút gốc trong trie.
const HEAD_CHARACTER = '*';

export default class Trie {
    constructor() {
        this.head = new TrieNode(HEAD_CHARACTER);
    }

    /**
     * @param {string} word
     * @return {Trie}
     */
    addWord(word) {
        const characters = Array.from(word);
        let currentNode = this.head;

        for (let charIndex = 0; charIndex < characters.length; charIndex += 1) {
            const isComplete = charIndex === characters.length - 1;
            currentNode = currentNode.addChild(characters[charIndex], isComplete);
        }

        return this;
    }

    /**
     * @param {string} word
     * @return {Trie}
     */
    deleteWord(word) {
        const depthFirstDelete = (currentNode, charIndex = 0) => {
            if (charIndex >= word.length) {
                // Dừng đệ quy nếu ký tự cần xoá nằm ngoài phạm vi của từ.
                return;
            }

            const character = word[charIndex];
            const nextNode = currentNode.getChild(character);

            if (nextNode == null) {
                // Dừng nếu từ cần xoá chưa được thêm vào Trie.
                return;
            }

            // Tiến sâu vào Trie.
            depthFirstDelete(nextNode, charIndex + 1);

            // Vì chúng ta đang xoá từ nên phải bỏ đánh dấu isCompleteWord.
            if (charIndex === (word.length - 1)) {
                nextNode.isCompleteWord = false;
            }

            // Chỉ xoá childNode nếu :
            // - childNode không có nút con,
            // - childNode.isCompleteWord === false.
            currentNode.removeChild(character);
        };

        // Bắt đầu xoá theo chiều sâu từ nút đầu tiên.
        depthFirstDelete(this.head);

        return this;
    }

    /**
     * @param {string} word
     * @return {string[]}
     */
    suggestNextCharacters(word) {
        const lastCharacter = this.getLastCharacterNode(word);

        if (!lastCharacter) {
            return null;
        }

        return lastCharacter.suggestChildren();
    }

    /**
     * Kiểm tra nếu chuỗi hoàn chỉnh đã tồn tại trong Trie.
     *
     * @param {string} word
     * @return {boolean}
     */
    doesWordExist(word) {
        const lastCharacter = this.getLastCharacterNode(word);

        return !!lastCharacter && lastCharacter.isCompleteWord;
    }

    /**
     * @param {string} word
     * @return {TrieNode}
     */
    getLastCharacterNode(word) {
        const characters = Array.from(word);
        let currentNode = this.head;

        for (let charIndex = 0; charIndex < characters.length; charIndex += 1) {
            if (!currentNode.hasChild(characters[charIndex])) {
                return null;
            }

            currentNode = currentNode.getChild(characters[charIndex]);
        }

        return currentNode;
    }
}
