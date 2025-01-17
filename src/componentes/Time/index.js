import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
    return (
        (props.colaboradores.length) > 0 ? <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            {props.colaboradores.map((colaborador) => (
                <Colaborador 
                    corDeFundo={props.corPrimaria}
                    key={colaborador.nome}
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem}
                />
            ))}
        </section> : null
    );
};

export default Time;
