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
        size : function size (node = this.head, counter=0) {
            if (node.next == null) {
                if (node == this.head && node.value != null){
                    return 1
                }
                else if (this.head.value == null || this.head.key == null) {
                    return 0
                }
                else {
                    return counter+=1
                }
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
        //refactor to return the value of a given key
        find : function find(key) {
            let result;
            for (let i = 0; i<this.size(); i++) {
                if (key == this.at(i).key) {
                    return result = this.at(i).value
                }
                else {
                    result = null
                }
            }
            return result
        },
        getIndex : function getIndex(key) {
            let result;
            for (let i = 0; i<this.size(); i++) {
                if (key == this.at(i).key) {
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
                if (0 == index) {
                        if (this.head.next != null) {
                            this.head = this.head.next;
                            return
                            
                        }
                        else {
                            this.head.value = null;
                            this.head.next = null;
                            this.head.key = undefined;
                            return
                        }
                    }
                    else {
                        this.at(index-1).next = this.at(index).next
                        return
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