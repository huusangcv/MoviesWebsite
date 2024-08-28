import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/actions/counter";
const FAQ = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <>
            {/* <PageLayout>
                <NavigationHeader>
                    <SearchBar />
                    <Link to="/docs">Docs</Link>
                </NavigationHeader>
                <Sidebar />
                <PageContent>
                    <TableOfContents />
                    <DocumentationText />
                </PageContent>
            </PageLayout> */}
        </>
    );
};

export default FAQ;
