import React from "react"

import HeaderComp from "./Header"
import MainComp from "./Main"
import FooterComp from "./Footer"

import BrandComp from "./Brand"
import GetDocumentComp from "./GetDocument"

export const Header       = (p) => <HeaderComp {...p} />
export const Main         = (p) => <MainComp {...p} />
export const Footer       = (p) => <FooterComp />

export const Brand        = () => <BrandComp />
export const GetDocument  = (p) => <GetDocumentComp {...p} />