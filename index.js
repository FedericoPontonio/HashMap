import { LinkedList, Node } from "./linkedList.js";

const hashMap = (function generateHashMap () {
    let buckets = [];
    for (let i = 0; i<16; i++) {
        buckets.push(LinkedList(Node()))
    }
    const methods = {
        hash : function hash(key) {    //for this project only use strings as keys.
        let hashCode = 0;    
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode % 16
        },
        set : function set(key, value) {
            let bucketConsidered = hashMap.buckets[hashMap.methods.hash(key)];
            if (bucketConsidered.contains(key)) {
                for (let i = 0; i<bucketConsidered.size(); i++) {
                    if (key == bucketConsidered.at(i).key) {
                        bucketConsidered.at(i).value = value
                    }
                }
            }
            else {
                if (hashMap.methods.hash(key) < 0 || hashMap.methods.hash(key) >= hashMap.length) {
                    throw new Error("Trying to access index out of bound");
                    }
            }
        },
    }
    return {buckets, methods}
})();



//test
// const carla = hashMap.methods.hash('carla');
// const carlos = hashMap.methods.hash('carlos');
// const pedro = hashMap.methods.hash('pedro');
// const carmen = hashMap.methods.hash('carmen');
// const sandro = hashMap.methods.hash('sandro');
// const mammolo = hashMap.methods.hash('mammolo');

// console.log(pedro);
// console.log(carmen);
// console.log(sandro);
// console.log(mammolo);
// console.log(carla);
// console.log(carlos);
//set
// hashMap.buckets[9].append('carla', 'trota');
// hashMap.buckets[9].append('CARLAR', 'mela');

// hashMap.methods.set('carla', 'merluzzo');
// hashMap.methods.set('CARLAR', 'pera');

// console.log(hashMap.buckets[9].head.next);
//altro

// console.log(hashMap);
// console.log(hashMap[1]);