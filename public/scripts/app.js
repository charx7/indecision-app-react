'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Componente padre donde rendearemos todo
var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    // Establecemos el estado de  la App para poder controlar las variables cambiantes
    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        // Bindeo del metodo para usar this correctamente
        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));
        // Llamamos al constructor del padre React.Component


        _this.metodoBorrarTodoOpciones = _this.metodoBorrarTodoOpciones.bind(_this);
        _this.metodoGeneraTareaAzar = _this.metodoGeneraTareaAzar.bind(_this);
        _this.metodoAniadeOpcion = _this.metodoAniadeOpcion.bind(_this);
        // Definimos los estados iniciales de las variables
        _this.state = {
            opciones: ['opcion1', 'opcion2', 'opcion3']
        };
        return _this;
    }

    // Metodo que define borrado de una opcion


    _createClass(IndecisionApp, [{
        key: 'metodoBorrarTodoOpciones',
        value: function metodoBorrarTodoOpciones() {
            // Funcion que modifica el estado de la app
            this.setState(function () {
                // Valor de regreso es el cambio del estado en este caso el arreglo de opciones en blanco
                return {
                    opciones: []
                };
            });
        }

        // Metodo que define la eleccion de una opcion al azar

    }, {
        key: 'metodoGeneraTareaAzar',
        value: function metodoGeneraTareaAzar() {
            // Genera numero aleatorio entre 0 y n - 1 del lenght del arreglo de opciones 
            var randomNum = Math.floor(Math.random() * this.state.opciones.length);
            alert(this.state.opciones[randomNum]);
        }

        // Metodo que se encarga de definir la opcion para aniadir que extrae del input de la form

    }, {
        key: 'metodoAniadeOpcion',
        value: function metodoAniadeOpcion(opcionNueva) {
            // Verificacion si la opcion nueva que se esta pasando esta en blanco
            if (!opcionNueva) {
                return 'Entre un valor valida para aniadir! >:(';
            } else if (this.state.opciones.indexOf(opcionNueva) > -1) {
                return 'No puede entrar valores repetidos!! >:((';
            } else {
                // Modificacion del estado de la app recuperando el estado anterior con el argumento estadoAnterior de la funcion
                this.setState(function (estadoAnterior) {
                    return {
                        // Pusheamos la opcion nueva usando concat sin manipular los estados inicial o anterior
                        opciones: estadoAnterior.opciones.concat([opcionNueva])
                    };
                });
            }
        }

        // Rendereo de JSX

    }, {
        key: 'render',
        value: function render() {
            // Para titulo dinamico
            var tituloProps = 'Indecision-App';
            var subTituloProps = 'Deja tu vida en las manos de una compu XD';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { titulo: tituloProps, subTitulo: subTituloProps }),
                React.createElement(Accion, {
                    tieneOpciones: this.state.opciones.length > 0,
                    opciones: this.state.opciones,
                    metodoGeneraTareaAzar: this.metodoGeneraTareaAzar
                }),
                React.createElement(Opciones, {
                    opciones: this.state.opciones,
                    metodoBorrarTodoOpciones: this.metodoBorrarTodoOpciones
                }),
                React.createElement(AniadeOpcion, {
                    metodoAniadeOpcion: this.metodoAniadeOpcion
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

// // Hacemos un componente de Hader extendiendo de la clase componente de react
// class Header extends React.Component {
//     // Metodo para definir obligatorio
//     render() {
//         return (
//             <div>
//                 {/* Usando props para mandar una variable de JS al rendereo del componente*/}
//                 <h1>{this.props.titulo}</h1>
//                 <h2>{this.props.subTitulo}</h2>
//             </div>
//         );
//     }
// }

// Componente de Header como componente funcional sin estado


var Header = function Header(props) {
    // Rendereo del HTML (JSX) en este tipo de componentes se obtiene acceso a los props de manera directa 
    // sin hacer referencia a this.props => props
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.titulo
        ),
        React.createElement(
            'h2',
            null,
            props.subTitulo
        )
    );
};

// Compenente de Accion como stateless-funcional en lugar de clase
var Accion = function Accion(props) {
    // Codigo que renderea el HTML como returno del componente funcional
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.metodoGeneraTareaAzar,
                disabled: !props.tieneOpciones
            },
            'Que deberia Hacer?'
        )
    );
};

// // Ahora creamos una clase (componente de react) para procesar un accino
// class Accion extends React.Component {
//     // CODIGO VIEJO QUE EJEMPLIFICA COMO HACER UNA SELECCION AL AZAR DE UN ELEMENTO DEL ARREGLO PROP OPCIONES
//     // // Metodo de la clase/componente que genera una tarea aleatoria a realizar
//     // generaTareaAzar()  {
//     //     // Genera numero aleatorio entre 0 y n - 1 del lenght del arreglo de opciones 
//     //     const randomNum = Math.floor(Math.random() * this.props.opciones.length);
//     //     console.log(randomNum);
//     // }

//     // Metodo Obligatorio
//     render(){
//         return (
//          <div>
//             {/* Usamos el metodo .bind() para que se pueda pasar el contexto al metodo de la clase*/}
//             <button
//                  onClick={this.props.metodoGeneraTareaAzar}
//                  disabled = {!this.props.tieneOpciones}
//             >
//                 Que deberia Hacer?
//             </button>
//          </div>   
//         );
//     }
// }

// Componente funcional sin estado de Opciones
var Opciones = function Opciones(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.metodoBorrarTodoOpciones },
            ' Borrar todas la opciones'
        ),
        props.opciones.map(function (elemento) {
            return React.createElement(Opcion, { key: elemento, currentOpcion: elemento });
        })
    );
};

// // Componente que renderea las opciones
// class Opciones extends React.Component {
//     // CODIGO VIEJO QUE EJEMPLIFICA COMO BINDEAR LOS METODOS PARA USAR THIS
//     // // Hacemos un Overrride al Constructor de la clase
//     // constructor(props) {
//     //     // Llama al constructor de la super clase para que herede los metodos del constructor padre
//     //     super(props);
//     //     // Corregir el contexto para llamar al objeto this en los metodos de la clase/componente
//     //     this.borrarTodo = this.borrarTodo.bind(this);
//     // } 

//     // // Metodo de la clase/componente que remueve las opciones
//     // borrarTodo() {
//     //     alert('Borrars Auch');
//     //     console.log(this.props.opciones);
//     // }


//     // Metodo Obligatorio del JSX que escupe el componente
//     render(){
//         return (
//             <div>
//                 {/* Buton que remueve las opciones*/}
//                 <button onClick={this.props.metodoBorrarTodoOpciones} > Borrar todas la opciones</button>
//                 {/* Usando Pops con arreglos y funcion de map para desplegar elementos de un arreglo en el componente
//                 Rendereo del subcomente opcion */}
//                 {
//                     this.props.opciones.map((elemento) => {
//                         return <Opcion key={elemento} currentOpcion = {elemento} />
//                     })
//                 }
//             </div>
//         );
//     }
// }

// Componente funcional de una sola opcion
var Opcion = function Opcion(props) {
    return React.createElement(
        'div',
        null,
        props.currentOpcion
    );
};

// // Componente de una sola opcion que sera rendereado dentro de la clase de Opciones
// class Opcion extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.currentOpcion}
//             </div>
//         );
//     }
// }

// Componente que renderea la forma con los input y el submit para aniadir opciones que hacer

var AniadeOpcion = function (_React$Component2) {
    _inherits(AniadeOpcion, _React$Component2);

    // Constructor para poder usar this dentro del metodo onFormSubmit()
    function AniadeOpcion(props) {
        _classCallCheck(this, AniadeOpcion);

        var _this2 = _possibleConstructorReturn(this, (AniadeOpcion.__proto__ || Object.getPrototypeOf(AniadeOpcion)).call(this, props));

        _this2.onFormSubmit = _this2.onFormSubmit.bind(_this2);
        // Introduccion de estado de los componente
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    // Metodo que se encarga de ver la logica del submit de la Form 
    // IMPORTANTE la e hace referencia al evento de submit de la forma


    _createClass(AniadeOpcion, [{
        key: 'onFormSubmit',
        value: function onFormSubmit(e) {
            // Hace que no se haga un rendereo completo de la pagina otra vez
            e.preventDefault();
            // Recuperar el valor que typeo el usuario en el input
            var opcionAniadir = e.target.elements.opcionNueva.value.trim();
            // Llama al metodo padre que aniade un opcion al arreglo del estado padre y guarda si hubo un error
            var error = this.props.metodoAniadeOpcion(opcionAniadir);
            console.log('Quisiste aniadir una opcion');

            this.setState(function () {
                return {
                    error: error
                };
            });
        }

        // Rendereo del JSX

    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.onFormSubmit },
                    React.createElement('input', { type: 'text', name: 'opcionNueva' }),
                    React.createElement(
                        'button',
                        null,
                        'Aniade Opcion'
                    )
                )
            );
        }
    }]);

    return AniadeOpcion;
}(React.Component);

// Rendereo de toda la aplicacion usando el componente padre IndecisionApp


ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
