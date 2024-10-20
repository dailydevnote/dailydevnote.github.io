import Container from "@/components/container";

import React from "react";
import { Suspense } from "react";


interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {


    return (
        <div className="flex flex-col">
            <Suspense>
                
            </Suspense>

            <div className="flex-grow">
                <Container>
                    {children}
                </Container>
            </div>
        </div>
    )
} 