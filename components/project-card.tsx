import Link from "next/link"
import Image from "next/image"
import { ProjectItemType } from "../data/projects"

export const ProjectCard = ({ projectItem, link, className = "" }: {
    projectItem: ProjectItemType,
    link: string,
    className?: string
}) => {
    return (
        <div className={className}>
            <Link href={link} className="card h-full" target="_blank" rel="noreferrer">
                <div className="block w-full">
                    <Image
                        src={projectItem.image}
                        alt={projectItem.title}
                        placeholder="blur"
                        layout="responsive"
                    />
                </div>

                <div className="flex flex-col p-5 grow">
                    <h3 className="text-2xl font-medium">{projectItem.title}</h3>
                    <p className="my-5">{projectItem.description}</p>
                    {projectItem.tags && (
                        <div className="flex mr-2 mt-auto flex-wrap">
                            {projectItem.tags.map((tag, i) => (
                                <span key={i} className="tag mr-3">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </Link>
        </div>
    )
}