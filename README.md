# axios-mock-adapter-jest
This will showcase below example with jest tests.

- Mocking the axios async await call for unit testing.
- Encode/Decode using Node buffer
- Bubble/Merge sort with own function for date sort

## Project Status - Github Actions CI

[![Jest - Unit test](https://github.com/gaikwadamolraj/axios-mock-adapter-jest/actions/workflows/Integration.yml/badge.svg)](https://github.com/gaikwadamolraj/axios-mock-adapter-jest/actions/workflows/Integration.yml)

## Local setup and run
   - ### To run this app, you'll need below node version
     ```sh
      v16.14.0
     ```

   - ### Inastall dependencies
     ```sh
     npm install
     ```
   - ### Run jest tests
     ```sh
     npm test
     ```

## Questions and ans
  ### Q1. Explain why `{ a: 1 } === { a: 1 }` is `false` in JavaScript.
    The above two objects are equal but object ref are different so returns `false`

  ### Q2. Describe the runtime difference(s) between `for await (const a of [p1, p2, p3]) { ... }` vs `[p1, p2, p3].forEach(async (p) { await p })`
    
  - For will resolve you the promise but forEach will return the array of Promise back.
    If you want to resolve Promises then you need to resolve all promises.
    ```sh
      Promise.all(arr.forEach(async(p) => await p))
    ```
    

  ### Q3. Describe good use cases for using a JavaScript `Map` instead of an `object`.
  - Map accepts any type key.
    - Map is iterable. For plain js object we need to Object.entries()
    - We can easily get the size of keys in MAP but for plain object we need to extra step.
    - JS object converts the key into string. {1: "Amol"} key number 1 be converted into "1" as string.
        ```sh
          const names = { 1: 'One', 2: 'Two' };
          Object.keys(names); // => ['1', '2']
        ```
    - Inside plain JS object boolean values converted into string 'true' or 'false'. But in map it keep the same datatype
        ```sh
          const booleansMap = new Map();
          booleansMap.set(true, "Yep");
          booleansMap.set(false, "Nope");
          [...booleansMap.keys()]; // => [true, false]
        ```
  - Object as key
    - In plain JS object that is possible to store but to access the value we need to loop to access the values.
        ```sh
          const foo = { name: 'foo' };
          const bar = { name: 'bar' };
          const kindOfMap = [
            [foo, 'Foo related data'],
            [bar, 'Bar related data'],
          ];
        ```
    - In MAP we have special type Weakmap that allows object as keys. Allows stratfoward access value by key 
       ```sh
          const foo = { name: 'foo' };
          const bar = { name: 'bar' };
          const mapOfObjects = new WeakMap();
          mapOfObjects.set(foo, 'Foo related data');
          mapOfObjects.set(bar, 'Bar related data');
          mapOfObjects.get(foo); // => 'Foo related data'
        ```
      - The main difference between Map and WeakMap is the latter allowing garbage collection of keys (which are objects). This prevents memory leaks
    
    - The map has no restriction over keys names
      -  If we use key name as toString and someone tried to check the isplainObject using obj.toString() then it will return the string not the [object Object]
          ```sh
            const actor = { name: 'Harrison Ford', toString: 'Actor: Harrison Ford'};
            const isPlainObject(value) => value.toString() === '[object Object]';
            isPlainObject(actor); // TypeError: value.toString is not a function
          ```
      - But in Map case we can easily use this.
        ```sh
          const isMap(value) => value.toString() === '[object Map]';
          const actorMap = new Map();
          actorMap.set('name', 'Harrison Ford');
          actorMap.set('toString', 'Actor: Harrison Ford');
          // Works!
          isMap(actorMap); // => true
        ```
  ### Q4. Describe at least one way to substitute a local, unpublished version of a JavaScript library in place of a another version that is already published in an NPM registry.
    - To use the local unpublished local package version in node then you need to do npm link <package-dir-path> that will create the symlink to package.
      ```sh
        npm link <your-local-pkg-dir-path>
      ```
    - To unlink the same follow unlink command
      ```sh
        npm unlink <your-local-pkg-dir-path>
      ```
  ### Q5 & Q6 - Encode/decode using Buffer
    - Go to the file /src/encodeDecodeBuffer.js
    - Added JEST tests for that 
  
  ### Q7. - Sort with own fun for dateHired
    - Go to the file /src/mergeSort.js
      - Implemented both bubble and merge sort
    - Added JEST tests for that

  ### Q8. Write a TypeScript variable declaration for a variable `a` that will guarantee that it is a property name or key of object `b` at compile-time.
  ```sh
    type objectKeyB = 'b'
    type a = {[key in objectKeyB]: string}
    const ob1:a = {'c': 'hello world'}
    const ob2:a = {'b': 'hello world’}
  ```
  ### Q9. Expain the differences between `object`s and `enum`s in TypeScript.
  - object allows to change the value of constant but `Enum` not.

    ```sh
      const enum FieldNamesEnum {
        FirstField = "Field One",
        SecondField = "Field Two"
      };
      let x: FieldNamesEnum;
      x = FieldNamesEnum.FirstField;
      x = FieldNamesEnum.SecondField;
      // Error - not assignable to FieldNames
      x = 'str';
      // Cannot assign
      FieldNamesEnum.FirstField = 'str';
    ```
     - see screenshot below
       ![TS compile erro for Enum](https://github.com/gaikwadamolraj/axios-mock-adapter-jest/blob/main/screenshots/TScomplieerr.png)

  - Objects allows to change the values
    ```sh
      const FieldNames = {
        FirstField: "Field One",
        SecondField: "Field Two"
      };
      let y: string;
      y = FieldNames.FirstField;
      y = FieldNames.SecondField;
      // Oops it works
      y = 'str';
      // Oops it works
      FieldNames.FirstField = 'str';
    ```
  ### Q10. - Sort with own fun for dateHired
    - Go to the file /src/axios.js
      - Implemented both bubble and merge sort
    - Added JEST tests for that


## Author
 Amol Gaikwad

 [<img src="https://img.icons8.com/fluency/48/000000/linkedin.png"/>](https://www.linkedin.com/in/gaikwadamolraj/)

 [<img src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/000000/external-email-customer-service-xnimrodx-lineal-gradient-xnimrodx-2.png"/>](mailto:gaikwadamolraj@gmail.com)