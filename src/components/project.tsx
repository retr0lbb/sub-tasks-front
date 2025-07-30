import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import {dayjs} from "@/lib/dayjs"
import Image from "@/assets/bg.jpeg"


interface ProjectProps {
    title: string,
    description: string | null,
    createdAt: string,
    projectId: string,
}

export function Project(props: ProjectProps){
    return(
        <a href={`/project/${props.projectId}`}>
        <Card>  
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
                <CardDescription>{props.description}</CardDescription>
            </CardHeader>
            
            <CardContent>
                <img className="aspect-video" src={Image.src} />
            </CardContent>

            <CardFooter>
                <p className="text-sm text-zinc-400">Sem alteração ha {dayjs(new Date(props.createdAt)).fromNow()}</p>
            </CardFooter>
        </Card>
        </a>
    )
}