import { encodeToBuffer, decodeFromBuffer } from "./encodeDecodeBuffer";

describe("Buffer encode/Decode", () => {
    describe("Encode/Decode", () => {
      const data = {
        symbol: 'amol',
        price: 123,
        quantity: 12,
        side: 'buy',
        type: 'limit',
      };
  
      it("should get encoded data", () => {
        const encodedData = encodeToBuffer(data)
        expect(encodedData).toBeDefined()
      })
  
      it("Match encoded string for same data", () => {
        const encodedData = encodeToBuffer(data)
        expect(encodedData).toEqual(encodeToBuffer(data))
      })
  
      it("Decoded should match original values", () => {
        const encodedData = encodeToBuffer(data)
        const decodedData = decodeFromBuffer(encodedData)
        expect(decodedData).toEqual(data)
      })
    })
  })