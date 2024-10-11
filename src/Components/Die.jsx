export default function Die(props) {

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#fff"
    }

    return (

        <button onClick={() => props.holdDice(props.id)} style={styles}> {props.value}  </button>

    )
}