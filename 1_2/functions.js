export const FirstElement = (names, numbers) => {
    const firstName = names[0];
    const firstNumber = numbers[0];
    console.log(firstName, firstNumber);
}

//--------------------------------------------
export const AllElementsExceptTheLastOne = (names, numbers) => {
    const newNames = names.slice(0, names.length - 1);
    const newNumbers = numbers.slice(0, - 1);
    console.log(newNames, newNumbers);
}

//--------------------------------------------
export const LastElement = (names, numbers) => {
    const lastName = names.slice(-1);
    const lastNumber = numbers.slice(-1);;
    console.log(lastName, lastNumber);
}

//--------------------------------------------
export const AllElementsExceptTheFirstOne = (names, numbers) => {
    const newNames = names.slice(1);
    const newNumbers = numbers.slice(1);
    console.log(newNames, newNumbers);
}

//--------------------------------------------
export const RemoveFromArray = () => {
    const arr = ["remove", "stay", "stay5", 22, true, "remove"];
    arr.pop();
    arr.shift();
    console.log(arr);
}

//--------------------------------------------
export const UniqueValues = () => {
    const arr = [1, 6, 9, 2, 1, 6, 7, 10];
    const newArr = [];
    arr.forEach((element) => {
        if (!newArr.includes(element)) {
            newArr.push(element);
        }
    })
    console.log(newArr)

    const sum = newArr.reduce((accumulator, value) => {
        return (accumulator + value);
    }, 0);
    console.log(sum);
}

//--------------------------------------------
export const RandomNumber = (a, b) => {
    const random_number = Math.floor(Math.random() * b) + a;
    console.log(random_number);
}

//--------------------------------------------
export const FirstLetterBig = (str) => {
    const arr = str.split(' ');
    // console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        console.log(arr[i]);
    }

    const str2 = arr.join(' ');
    // console.log(str2);
}

//--------------------------------------------
export const Capitalize = (cap) => {
    console.log(cap.toUpperCase());
}

//--------------------------------------------
export const CompareLetters = (param1, param2) => {
    if (param1.slice(-1) === param2.slice(-1)) {
        console.log(true)
    } else {
        console.log(false);
    }
}

