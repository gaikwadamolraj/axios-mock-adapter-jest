import { mergeSort, bubbleSort } from "./mergeSort";

describe("Sorting tests", () => {
    describe("Check the sorting logic", () => {
        const data = [
            { id: 1, dateHired: "Mar 12 2012 10:00:00 AM" },
            { id: 2, dateHired: "Mar 28 2012 08:00:00 AM" },
            { id: 3, dateHired: "Mar 30 2013 10:00:00 AM" },
            { id: 4, dateHired: "Mar 12 2012 10:00:01 AM" },
            { id: 5, dateHired: "Mar 12 2012 10:00:02 PM" },
        ];
        const sorted = [
            { id: 3, dateHired: 'Mar 30 2013 10:00:00 AM' },
            { id: 2, dateHired: 'Mar 28 2012 08:00:00 AM' },
            { id: 5, dateHired: 'Mar 12 2012 10:00:02 PM' },
            { id: 4, dateHired: 'Mar 12 2012 10:00:01 AM' },
            { id: 1, dateHired: 'Mar 12 2012 10:00:00 AM' }
          ]

        it("merget sort - Get sorted by dateHired", () => {
            const sortedArr = mergeSort(data)
            expect(sortedArr).toEqual(sorted)
        })

        it("Bubble sort - Get sorted by dateHired", () => {
            const sortedArr = bubbleSort(data, 'asc')
            expect(sortedArr).toEqual(sorted)
        })
    })
})