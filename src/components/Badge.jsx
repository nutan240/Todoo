import React from 'react'

function Badge({badge}) {
    return (
        <>
            <span
                className="  border-2  inline-block whitespace-nowrap rounded-full bg-success-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-success-700">
                {badge}
            </span>
        </>
    )
}

export default Badge