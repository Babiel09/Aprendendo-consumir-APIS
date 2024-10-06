import { Table, TableCell, TableHead, TableRow,TableBody } from "@mui/material";
import Paper from "@mui/material/Paper";
import styles from './tabela.module.scss'
import { TabelaProps } from "../../utils/tabela";
export default function Tabela({children}:TabelaProps){
    return(
        <div className={styles.container}>
        <Table component={Paper}>
        <TableHead>
          <TableRow className={styles.head}>
            <TableCell>{children}</TableCell>
            <TableCell>{children}</TableCell>
            <TableCell>{children}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow className={styles.restaura}>
            {children}
            </TableRow>     
        </TableBody>
      </Table>
      </div>
    )
}