export default(e ,defaultHeight)=>{
    if(e)
    {
        const target = e.target ? e.target :e ;
        target.style.height = defaultHeight ;
        target.style.height  = `${target.scrolHeight}px`;
    }
};