function Btn() {
    const clickHandler =
        () => console.log('clicked!');

    const mouseOver =
        () => console.log('mouse over');
        
    return (
        <button onClick={clickHandler} onMouseOver={mouseOver}>This is a button!</button>
    );
}

export default Btn;