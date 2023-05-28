import { useParams } from "react-router-dom"

export function ProductDetail(){
    const {productId} = useParams();
    return (
        <div>
            <h1>This is product Details page {productId}</h1>
        </div>
    )
}