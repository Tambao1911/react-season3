import { useEffect, useState } from "react";

function CountDowm({ setIsDis, isCountDown }) {

    const [count, setCount] = useState(10)
    useEffect(() => {
        if (count === 0) {
            setIsDis(true)
            return
        }
        if (isCountDown) {
            setCount(0)
        }
        const timer = setInterval(() => {
            setCount(count - 1)
        }, 1000)

        return () => clearInterval(timer)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count])

    return (
        <div>{count}</div>
    );
}

export default CountDowm;