import Link from 'next/link'

export default function StudentInfo() {
    return (
        <div>
            <h2>Name: Xin Wen</h2>
            <p>
                 GitHub: <Link href="https://github.com/Sigrid-W/cprg306-assignments" style={{ textDecoration: "underline" }}>Sigrid-W/cprg306-assignments</Link>
            </p>
        </div>
    )
}
