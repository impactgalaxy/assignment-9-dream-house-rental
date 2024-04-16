import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom"

export default function HomeDetails() {
    const [filterData, setFilterData] = useState([]);
    const data = useLoaderData();
    const { id } = useParams();

    useEffect(() => {
        const d = data.filter(matchItem => matchItem.id === parseInt(id))
        setFilterData(d);
    }, [data, id]);
    console.log(filterData);

    return (
        <div>
            <Helmet>
                <title>Home details |{id}</title>
            </Helmet>

        </div>
    )
}
