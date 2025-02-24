import Image from 'next/image';

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1>THREE App</h1>
            <ul>
                <li>
                    <a href="/">home</a>
                </li>
                <li>
                    <a href="/one">one</a>
                </li>
                <li>
                    <a href="/two">two</a>
                </li>
            </ul>
        </div>
    );
}
