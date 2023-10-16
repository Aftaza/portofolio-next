import Image from "next/image"
import Blop1 from "^/Blops.svg"

const Blops = () => {
    return (
        <div>
            <Image src={Blop1} alt="The Bloops" width={533} height={449} />
        </div>
    )
}

export default Blops