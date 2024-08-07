// import * as React from "react"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

export function HomeCard({ title }) {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle className="text-center">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <Image className="rounded-b-lg" fill src={'https://picsum.photos/seed/picsum/300/200'} alt='none' />
            </CardContent>
        </Card>
    )
}
