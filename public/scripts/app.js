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
                React.createElement(Accion, { tieneOpciones: this.state.opciones.length > 0, opciones: this.state.opciones }),
                React.createElement(Opciones, {
                    opciones: this.state.opciones,
                    metodoBorrarTodoOpciones: this.metodoBorrarTodoOpciones
                }),
                React.createElement(AniadeOpcion, null)
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

// Hacemos un componente de Hader extendiendo de la clase componente de react


var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',

        // Metodo para definir obligatorio
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.titulo
                ),
                React.createElement(
                    'h2',
                    null,
                    this.props.subTitulo
                )
            );
        }
    }]);

    return Header;
}(React.Component);

// Ahora creamos una clase (componente de react) para procesar un accino


var Accion = function (_React$Component3) {
    _inherits(Accion, _React$Component3);

    function Accion() {
        _classCallCheck(this, Accion);

        return _possibleConstructorReturn(this, (Accion.__proto__ || Object.getPrototypeOf(Accion)).apply(this, arguments));
    }

    _createClass(Accion, [{
        key: 'generaTareaAzar',

        // Metodo de la clase/componente que genera una tarea aleatoria a realizar
        value: function generaTareaAzar() {
            // Genera numero aleatorio entre 0 y n - 1 del lenght del arreglo de opciones 
            var randomNum = Math.floor(Math.random() * this.props.opciones.length);
            console.log(randomNum);
        }

        // Metodo Obligatorio

    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    {
                        onClick: this.generaTareaAzar.bind(this),
                        disabled: !this.props.tieneOpciones
                    },
                    'Que deberia Hacer?'
                )
            );
        }
    }]);

    return Accion;
}(React.Component);

// Componente que renderea las opciones


var Opciones = function (_React$Component4) {
    _inherits(Opciones, _React$Component4);

    function Opciones() {
        _classCallCheck(this, Opciones);

        return _possibleConstructorReturn(this, (Opciones.__proto__ || Object.getPrototypeOf(Opciones)).apply(this, arguments));
    }

    _createClass(Opciones, [{
        key: 'render',

        // CODIGO VIEJO QUE EJEMPLIFICA COMO BINDEAR LOS METODOS PARA USAR THIS
        // // Hacemos un Overrride al Constructor de la clase
        // constructor(props) {
        //     // Llama al constructor de la super clase para que herede los metodos del constructor padre
        //     super(props);
        //     // Corregir el contexto para llamar al objeto this en los metodos de la clase/componente
        //     this.borrarTodo = this.borrarTodo.bind(this);
        // } 

        // // Metodo de la clase/componente que remueve las opciones
        // borrarTodo() {
        //     alert('Borrars Auch');
        //     console.log(this.props.opciones);
        // }


        // Metodo Obligatorio del JSX que escupe el componente
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.metodoBorrarTodoOpciones },
                    ' Borrar todas la opciones'
                ),
                this.props.opciones.map(function (elemento) {
                    return React.createElement(Opcion, { key: elemento, currentOpcion: elemento });
                })
            );
        }
    }]);

    return Opciones;
}(React.Component);

// Componente de una sola opcion que sera rendereado dentro de la clase de Opciones


var Opcion = function (_React$Component5) {
    _inherits(Opcion, _React$Component5);

    function Opcion() {
        _classCallCheck(this, Opcion);

        return _possibleConstructorReturn(this, (Opcion.__proto__ || Object.getPrototypeOf(Opcion)).apply(this, arguments));
    }

    _createClass(Opcion, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.props.currentOpcion
            );
        }
    }]);

    return Opcion;
}(React.Component);

// Componente que renderea la forma con los input y el submit para aniadir opciones que hacer


var AniadeOpcion = function (_React$Component6) {
    _inherits(AniadeOpcion, _React$Component6);

    function AniadeOpcion() {
        _classCallCheck(this, AniadeOpcion);

        return _possibleConstructorReturn(this, (AniadeOpcion.__proto__ || Object.getPrototypeOf(AniadeOpcion)).apply(this, arguments));
    }

    _createClass(AniadeOpcion, [{
        key: 'onFormSubmit',

        // Metodo que se encarga de ver la logica del submit de la Form 
        // IMPORTANTE la e hace referencia al evento de submit de la forma
        value: function onFormSubmit(e) {
            // Hace que no se haga un rendereo completo de la pagina otra vez
            e.preventDefault();
            // Recuperar el valor que typeo el usuario en el input
            var opcionAniadir = e.target.elements.opcionNueva.value.trim();
            if (opcionAniadir) {
                alert('Quisiste aniadir una opcion');
            }
        }

        // Rendereo del JSX

    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
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
