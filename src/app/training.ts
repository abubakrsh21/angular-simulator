export const training = 'Angular training';


function sum(a: number, b: number): number {
    return a + b;
}


let uploadStatus: 'loading' | 'success' | 'error';


let textFormat: 'uppercase' | 'lowercase' | 'capitalize';


interface User {
    id: number;
    name: string;
    email: string;
    age?: number;
}

interface AdminUser extends User {
    role: string;
    permissions: string[]; // чтобы админ мог менять, удалять и тд
}


function formatText(
    text: string,
    format: 'uppercase' | 'lowercase' | 'capitalize'
): string {

    if (format === 'uppercase') {
        return text.toUpperCase();
    } else if (format === 'lowercase') {
        return text.toLowerCase();
    } else if (format === 'capitalize') {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }

    return text;
}



function removeSym(text: string, sym: string): string {
    return text.replaceAll(sym, '');
}



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

const filteredUsers = users.filter((user: User) => user.age === 20);
