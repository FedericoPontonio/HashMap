export function LinkedList (headNode) {
    return {
        head : headNode,
        //methods
        append : function append(key, value, node=this.head) {
            if (node == this.head && node.value == null) {
                node.value = value;
                node.key = key;
            }
            else if (node.next == null) {
                node.next = Node(key, value);
            }
            else if (node.next != null) {
                this.append(key, value, node.next)
            }
        },
        prepend : function prepend(value) {
            let formerHeadPlaceholder = this.head;
            this.head = Node(value, formerHeadPlaceholder);
        },
        size : function size (node = this.head, counter=1) {
            if (node.next == null) {
                return counter
            }
            else {
                counter+=1;
                return this.size(node.next, counter)
            }
        },
        tail : function tail(node=this.head) {
            if (node.next == null) {
                return node
            }
            else {
                return this.tail(node.next)
            }
        },
        at : function at(index, node=this.head,counter=0) {
            if (index == counter) {
                return node
            }
            else {
                return this.at(index, node.next, counter+1)
            }
        },
        pop : function pop () {
            this.at(this.size()-2).next = null
        },
        //refactored to search key instead of value
        contains : function contains(key, node=this.head) {
            let result = false;
            for (let i = 0; i<this.size(); i++) {
                if (key == this.at(i).key) {
                    result = true
                }
            }
            return result
        },
        find : function find(value) {
            let result;
            for (let i = 0; i<this.size(); i++) {
                if (value == this.at(i).value) {
                    return i
                }
                else {
                    result = null
                }
            }
            return result
        },
        toString : function toString () {
            let result = '';
            for (let i = 0; i<this.size(); i++) {
                if (i == this.size()-1) {
                    result += this.at(i).value
                }
                else {
                    result += this.at(i).value + ' -> ';
                }
            }
            return result
        },
        insertAt : function insertAt(value, index) {
            console.log(this.size())
            for (let i = 0; i<this.size(); i++) {
                if (i == index) {
                    if (i == 0) {
                        this.head = Node(value, this.head)
                    }
                    else {
                        this.at(i-1).next = Node(value, this.at(i));
                    }
                }
            }
            console.log(this.size())
        },
        removeAt : function removeAt(index) {
            for (let i = 0; i<this.size(); i++) {
                if (i == index) {
                    if (i == 0) {
                        this.head = this.head.next
                    }
                    else {
                        console.log(this.at(index-1))
                        this.at(index-1).next = this.at(index).next
                    }
                }
            }
        },
    }
};

export function Node (key, value = null, next=null) {
    return {
        value,
        key,
        next,
    }
};