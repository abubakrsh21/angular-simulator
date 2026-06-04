// 2. Создать файл в папке "app" под названием "training.ts", подключить его в app.component.ts.
export const training = 'Angular training';


// 3. Создать функцию, которая принимает два числа и возвращает их сумму.
function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(5, 10));


// 4. Создать переменную uploadStatus
let uploadStatus: 'loading' | 'success' | 'error';


// 5. Создать переменную textFormat
let textFormat: 'uppercase' | 'lowercase' | 'capitalize';


// 6. Создать интерфейс юзера
interface User {
    id: number;
    name: string;
    email: string;
    age?: number;
}

// 7. Создать интерфейс, который расширяется интерфейсом User
interface AdminUser extends User {
    role: string;
    permissions: string[]; // чтобы админ мог менять, удалять и тд
}


// 8. Создать функцию, которая принимает строку и вариант
function formatText(
    text: string,
    format: 'uppercase' | 'lowercase' | 'capitalize'
): string {

    if (format === 'uppercase') {
        return text.toUpperCase();
    }

    if (format === 'lowercase') {
        return text.toLowerCase();
    }

    if (format === 'capitalize') {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }
    
    return text;
}

console.log(formatText('hello world', 'capitalize'));


// 9. Создать функцию, которая принимает строку и символ
function removeSym(text: string, sym: string): string {
    return text.replaceAll(sym, '');
}

console.log(removeSym('hello world', 'l'))


// 10. Создать массив объектов на основе интерфейса с задания №6
const users: User[] = [
    {
        id: 1,
        name: 'Abubakr',
        email: 'abubakr@gmail.com',
        age: 21
    },
    {
        id: 2,
        name: 'Musa',
        email: 'musa@gmail.com',
        age: 20
    },
    {
        id: 3,
        name: 'Adam',
        email: 'adam@gmail.com',
        age: 27
    }
];

const filteredUsers = users.filter(user => user.age === 20);

console.log(filteredUsers);