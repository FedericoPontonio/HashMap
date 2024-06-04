import { LinkedList, Node } from "./linkedList.js";

let hashMap = (function generateHashMap () {
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
            // hashMap.methods.checkLoadFactor();
            let bucketConsidered = hashMap.buckets[hashMap.methods.hash(key)];
            if (bucketConsidered.contains(key)) {
                for (let i = 0; i<bucketConsidered.size(); i++) {
                    if (key == bucketConsidered.at(i).key) {
                        bucketConsidered.at(i).value = value
                    }
                }
            }
            else if (!bucketConsidered.contains(key)) {
                hashMap.buckets[hashMap.methods.hash(key)].append(key, value)
            }
            else {
                if (hashMap.methods.hash(key) < 0 || hashMap.methods.hash(key) >= hashMap.length) {
                    throw new Error("Trying to access index out of bound");
                    }
            }
        },
        get : function get(key) {
            let hashedKey = hashMap.methods.hash(key);
            return hashMap.buckets[hashedKey].find(key)
        },
        has : function has(key) {
            let hashedKey = hashMap.methods.hash(key);
            return hashMap.buckets[hashedKey].contains(key)
        },
        remove : function remove(key) {
            let bucket = hashMap.buckets[hashMap.methods.hash(key)];
            if (hashMap.methods.has(key)) {
                bucket.removeAt(bucket.getIndex(key))
                return true
            }
            else {
                return false
            }
        },
        length : function length() {
            let counter = 0;
            for (let i = 0; i<hashMap.buckets.length; i++) {
                counter += hashMap.buckets[i].size();
            }
            return counter
        },
        clear : function clear () {
            for (let i = 0; i<hashMap.buckets.length; i++) {
                hashMap.buckets[i].head.value = null;
                hashMap.buckets[i].head.next = null;
                hashMap.buckets[i].head.key = undefined;
            }
        },
        keys : function keys() {
            let keys = [];
            for (let B = 0; B<hashMap.buckets.length; B++) {
                for (let LL = 0; LL<hashMap.buckets[B].size(); LL++) {
                    if (LL == hashMap.buckets[B].size()-1) {
                        keys.push( hashMap.buckets[B].at(LL).key)
                    }
                    else {
                        keys.push( hashMap.buckets[B].at(LL).key);
                    }
                }
            }
            return keys
        },
        values : function values() {
            let values = [];
            for (let B = 0; B<hashMap.buckets.length; B++) {
                for (let LL = 0; LL<hashMap.buckets[B].size(); LL++) {
                    if (LL == hashMap.buckets[B].size()-1) {
                        values.push( hashMap.buckets[B].at(LL).value)
                    }
                    else {
                        values.push( hashMap.buckets[B].at(LL).value);
                    }
                }
            }
            return values
        },
        entries : function entries() {
            let entries = [];
            for (let B = 0; B<hashMap.buckets.length; B++) {
                for (let LL = 0; LL<hashMap.buckets[B].size(); LL++) {
                    if (LL == hashMap.buckets[B].size()-1) {
                        entries.push([hashMap.buckets[B].at(LL).key +', '+ ( hashMap.buckets[B].at(LL).value)])
                    }
                    else {
                        entries.push([hashMap.buckets[B].at(LL).key +', '+ ( hashMap.buckets[B].at(LL).value)]);
                    }
                }
            }
            return entries
        },
        checkLoadFactor : function() {
            let currentLoad = 0;
            for (let B = 0; B<hashMap.buckets.length; B++) {
                if (hashMap.buckets[B].size() > 0) {
                    currentLoad+=1
                }
            }
            console.log('load factor: '+Math.round(currentLoad*100/hashMap.buckets.length)+'%');
        }

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
// const carm = hashMap.methods.hash('carm');

// console.log(carm);
// console.log(pedro);
// console.log(carmen);
// console.log(sandro);
// console.log(mammolo);
// console.log(carla);
// console.log(carlos);
//set
hashMap.buckets[9].append('carla', 'primo');
hashMap.buckets[9].append('CARLAR', 'secondo');
hashMap.buckets[9].append('carm', 'terzo');
hashMap.buckets[6].append('pedro', 'terzo');
hashMap.buckets[12].append('sanch', 'terzo');

hashMap.methods.set('sandokan', 'caz');
hashMap.methods.set('sonz?', 'merluzzo');
hashMap.methods.set('mirko', 'pera');
hashMap.methods.set('se', 'caz');
hashMap.methods.set('me', 'caz');
hashMap.methods.set('ga', 'caz');
hashMap.methods.set('s', 'caz');
hashMap.methods.set('oo', 'caz');
hashMap.methods.set('pee', 'caz');
hashMap.methods.set('fa', 'caz');
hashMap.methods.set('lsdjfh', 'caz');
hashMap.methods.set('sdlfn', 'caz');
hashMap.methods.set('dòfl', 'caz');
hashMap.methods.set('sdfk', 'caz');
hashMap.methods.set('sadkè', 'caz');
hashMap.methods.set('apsfknsdlfkn', 'caz');
hashMap.methods.set('ldkkm', 'caz');
hashMap.methods.set('sòafmasm', 'caz');
hashMap.methods.set('apsodwqop', 'caz');
hashMap.methods.set('saòldka', 'caz');
hashMap.methods.set('laksdlnalsdk', 'caz');
hashMap.methods.set('asdkjasldk', 'caz');
hashMap.methods.set('daskdlakdlka', 'caz');
hashMap.methods.set('daodlajdlkad', 'caz');
hashMap.methods.set('aldadjnakdn', 'caz');
hashMap.methods.set('asdjaskdjnaskd', 'caz');
hashMap.methods.set('ooooooooasas', 'caz');
hashMap.methods.set('kadsqwbwbwbwbw', 'caz');
hashMap.methods.set('asldnasdlkn', 'caz');
hashMap.methods.set('woeiqweklen', 'caz');
hashMap.methods.set('apsalsma', 'caz');
hashMap.methods.set('sdka,.ma,', 'caz');
hashMap.methods.set('sdojpqwmd', 'caz');




// console.log(hashMap.buckets[9])

// console.log(hashMap.buckets[9].find('carla'));
//get
//console.log(hashMap.methods.get('CARLAR'))
//has
// console.log(hashMap.methods.has('CARLAR'))
//remove
// console.log(hashMap.methods.remove('carla'))
//remove
// hashMap.methods.remove('CARLAR');
// hashMap.methods.remove('carla');
// hashMap.methods.remove('carm');
//length
// console.log(hashMap.methods.length())
// //clear
// hashMap.methods.clear()
//keys
// console.log(hashMap.methods.keys());
//values
// console.log(hashMap.methods.values());
//entries
// console.log(hashMap.methods.entries());
//checkLoadFactor
// console.log(hashMap.methods.checkLoadFactor())
//altro

// console.log(hashMap);
// console.log(hashMap[1]);