import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
    return (
        (props.colaboradores.length) > 0 ? <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='cards'>
                {props.colaboradores.map((colaborador) => (
                    <Colaborador
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                    />
                ))}
            </div>
        </section> : null
    );
};

export default Time;
