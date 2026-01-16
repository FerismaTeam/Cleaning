import { company_name } from "@/data/about"
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
    title: "Ueber uns | " + company_name,
    description: "" // page description
}

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => children

export default Layout