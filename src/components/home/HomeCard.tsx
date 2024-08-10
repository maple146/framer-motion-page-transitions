// import * as React from "react"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export function HomeCard({ title, url }) {
    return (
        <Link href={url}>
            <Card className="">
                <CardHeader>
                    <CardTitle className="text-center">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <Image className="rounded-b-lg" fill src={'https://picsum.photos/seed/picsum/300/200'} alt='none' />
                </CardContent>
            </Card>
        </Link>
    )
}
