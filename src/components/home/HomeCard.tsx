import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { homeCardTypes } from "@/types/homeCardsGridTypes"
import Image from "next/image"
import Link from "next/link"

export function HomeCard({ title, description, url }: homeCardTypes) {
    return (
        <Link href={url}>
            <Card className="">
                <CardHeader>
                    <CardTitle className="text-center">{title}</CardTitle>
                    <CardDescription className="text-center">{description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <Image className="rounded-b-lg" fill src={'https://picsum.photos/seed/picsum/300/200'} alt='none' />
                </CardContent>
            </Card>
        </Link>
    )
}
