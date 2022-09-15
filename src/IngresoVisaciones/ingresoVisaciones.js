import React from 'react';
import ingresoVisaciones from './ingresovisaciones.css';
import {Grid} from '@mui/material';
import {ButtonGroup} from '@mui/material';
import {Button} from '@mui/material';
import {TextField} from '@mui/material';
import {FormControlLabel} from '@mui/material';
import {Radio} from '@mui/material';

function IngresoVisaciones(){
    return(
        <React.Fragment>
            <Grid container spacing={2}>
                <div className='container-fluid grupoBotonesSupereriores'>
                    <Grid item xs={8}>
                        <ButtonGroup aria-label="outlined primary button group">
                        <Button variant="contained" className='btnIngresoVisacion tamanoBtn'>Ingreso Visacion</Button>
                        <Button variant="contained" className='btnVisacionSeguimiento tamanoBtn'>Visaciones Seguimiento</Button>
                        <Button variant="contained" className='botones tamanoBtn'>Visaciones Objetadas</Button>
                        <Button variant="contained" className='btnReportes tamanoBtn btnGuardar'>Reportes</Button>
                        </ButtonGroup>
                    </Grid>
                </div>           
            </Grid>
            <div className='camposInput'>
                <p>Ingreso Visacion</p>  
                <TextField id="outlined-basic" label="Rut Asegurado" variant="outlined" />
            </div>
            <div className='camposInput'>
                <TextField id="outlined-basic" label="Nombre" variant="outlined" />
                <TextField id="outlined-basic" label="Apellido Paterno" variant="outlined" />

                <TextField id="outlined-basic" label="Apellido Materno" variant="outlined" />
            </div>
            <div className='camposInput'>
                <TextField id="outlined-basic" label="Visacion de beneficios" variant="outlined" />
                <TextField id="outlined-basic" label="FECHA" variant="outlined" />
            </div>
            <div className='camposInput'>
                <p>El reclamante es igual al asegurado?</p>
                <FormControlLabel value="Si" control={<Radio />} label="Si" />
                <FormControlLabel value="No" control={<Radio />} label="No" />    
            </div>
            <div className='camposInput'>
                <p>Adjuntar Documento</p>
                <Button variant="contained" component="label">Adjuntar Documento <input hidden accept="image/*" multiple type="file" /> </Button>
            </div>   
            <div className='camposInput divBtnFinales'>
                <Button variant="contained" className='btnGuardar'>Volver</Button>
                <Button variant="contained" className='btnGuardar'>Guardar</Button>
            </div>   
        </React.Fragment>
    );
}

export {IngresoVisaciones};