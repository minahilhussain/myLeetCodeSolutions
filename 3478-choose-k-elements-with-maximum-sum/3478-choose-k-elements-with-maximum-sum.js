/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var findMaxSum = function(nums1, nums2, k) {
    const n = nums1.length;

    // sort indices by nums1
    const idx = Array.from({ length: n }, (_, i) => i)
        .sort((a, b) => nums1[a] - nums1[b]);

    const res = new Array(n).fill(0);

    // min heap implementation
    class MinHeap {
        constructor() {
            this.heap = [];
        }

        push(val) {
            this.heap.push(val);
            this._bubbleUp();
        }

        pop() {
            if (this.heap.length === 1) return this.heap.pop();
            const top = this.heap[0];
            this.heap[0] = this.heap.pop();
            this._bubbleDown();
            return top;
        }

        size() {
            return this.heap.length;
        }

        _bubbleUp() {
            let i = this.heap.length - 1;
            while (i > 0) {
                let p = Math.floor((i - 1) / 2);
                if (this.heap[p] <= this.heap[i]) break;
                [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
                i = p;
            }
        }

        _bubbleDown() {
            let i = 0;
            const n = this.heap.length;

            while (true) {
                let left = 2 * i + 1;
                let right = 2 * i + 2;
                let smallest = i;

                if (left < n && this.heap[left] < this.heap[smallest]) {
                    smallest = left;
                }
                if (right < n && this.heap[right] < this.heap[smallest]) {
                    smallest = right;
                }
                if (smallest === i) break;

                [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
                i = smallest;
            }
        }
    }

    const heap = new MinHeap();
    let sum = 0;

    let i = 0;

    while (i < n) {
        let j = i;

        // same nums1 group
        while (j < n && nums1[idx[j]] === nums1[idx[i]]) {
            res[idx[j]] = sum;
            j++;
        }

        // now add their nums2
        for (let p = i; p < j; p++) {
            let val = nums2[idx[p]];
            heap.push(val);
            sum += val;

            if (heap.size() > k) {
                sum -= heap.pop();
            }
        }

        i = j;
    }

    return res;
};