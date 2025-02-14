import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div>
                <h2>Anchor Tag</h2>
                <ul>
                    <li>
                        <a href="/">home</a>
                    </li>
                    <li>
                        <a href="/two">two</a>
                    </li>
                    <li>
                        <a href="/three">three</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2>Link Component</h2>
                <ul>
                    <li>
                        <Link href="/two">two</Link>
                    </li>
                    <li>
                        <Link href="/three">three</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
