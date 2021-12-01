import Blockies from "react-blockies";
import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

/**
 * Shows a blockie image for the provided wallet address
 * @param {*} props
 * @returns <Blockies> JSX Elemenet
*/

const useStyles = makeStyles((theme) => ({
    textWrapper: {
        color: theme.palette.primary.main,
        padding: '0px 5px',
    },
    blockieWrapper: {
        background: theme.palette.primary.contrastText,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '10px',
        borderRadius: '10px',
        padding: '5px 10px'
    }
}))

const Blockie = (props) =>  {
    const classes = useStyles()
    const { walletAddress } = useMoralisDapp();
    const address = props?.currentWallet ? walletAddress?.toLowerCase() : props.address?.toLowerCase()
    if ((!props.address && !props.currentWallet) || !walletAddress) return null;

    return (
        <div className={classes.blockieWrapper}>
            <Typography className={classes.textWrapper} variant='caption' >{address}</Typography>
            <Blockies
                seed={address}
                className="identicon"
                {...props}
            />
        </div>
    );
}

export default Blockie;
