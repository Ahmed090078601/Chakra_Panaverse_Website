'use client'
import Link from "next/link";
export default function Teachers({ params }: { params: { teachers: string } }) {
    return (
        <>
            <h1>Teacher</h1>
            <Link href={"/"}>Home</Link>
            <div>The product name is: {params.teachers}</div>
        </>
    );
}