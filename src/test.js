// import axios from 'axios';

// import { GetEmployees } from './';

// jest.mock('axios');

// describe('GetEmployees', () => {
//   it('fetches Employees successfully data from an API', async () => {
//     const data = [{id: 1, name: 'Amol'}, {id: 2, name: 'Shaurya'}, {id: 3, name: 'Snehal'}];

//     axios.get.mockImplementationOnce(() => Promise.resolve(data));

//     await expect(GetEmployees(1)).resolves.toEqual(data);
//   });
// });

import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { BASE_URL, fetchUsers } from "./";

describe("fetchUsers", () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  describe("when API call is successful", () => {
    it("should return users list", async () => {
      // given
      const users = [
        { id: 1, name: "John" },
        { id: 2, name: "Andrew" },
      ];
      mock.onGet(`${BASE_URL}/users`).reply(200, users);

      // when
      const result = await fetchUsers();

      // then
      expect(mock.history.get[0].url).toEqual(`${BASE_URL}/users`);
      expect(result.data).toEqual(users);
    });
  });

  describe("when API call fails", () => {
    it("should return empty users list", async () => {
      // given
      mock.onGet(`${BASE_URL}/users`).networkErrorOnce();

      // when
      const result = await fetchUsers();

      // then
      expect(mock.history.get[0].url).toEqual(`${BASE_URL}/users`);
      expect(result).toEqual([]);
    });
  });
});