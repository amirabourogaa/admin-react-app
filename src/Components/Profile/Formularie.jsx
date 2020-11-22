import React, {Component} from 'react';

class Formulario extends Component {
	CategoriaRef = React.createRef();

	cambiarCategoria = (e) => {
		e.preventDefault();
		this.props.consultarNoticias(this.CategoriaRef.current.value);
	}

	render() {
		return(
			<div className="buscador row">
				<div className="col s12 m8 offset-m2">
					<form onSubmit={this.cambiarCategoria}>
						<h2>News by category
</h2>
						<div className="input-field col s12 m8">
							<select ref={this.CategoriaRef}>
								<option value="general" defaultValue>General</option>
								<option value="bussiness">Business</option>
								<option value="entertaiment">Entertainment
</option>
								<option value="health">Health</option>
								<option value="science">Science</option>
								<option value="sports">sports</option>
								<option value="technology">Technology</option>
							</select>
						</div>
						<div className="input-field col s12 m4 enviar">
							<input type="submit" className="btn amber darken-2" value="Search" />
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default Formulario;