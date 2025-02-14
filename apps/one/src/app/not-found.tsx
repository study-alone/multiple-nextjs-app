import { headers } from 'next/headers';

export default async function NotFoundPage() {
    const headersList = await headers();
    console.log(headersList.values());

    return (
        <div>
            <h1>Not Found!!</h1>
        </div>
    );
}
