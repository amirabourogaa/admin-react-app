import React, {Component} from 'react';
import Noticia from './New';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Noticias extends Component {
	render() {
		return(
			<div className="row">
				<TransitionGroup>
					{this.props.noticias.map(noticia => (
						<CSSTransition
							key={noticia.url}
							classNames="fade"
							timeout={500}
						>
							<Noticia noticia={noticia}/>
						</CSSTransition>
					))}
				</TransitionGroup>
			</div>
		)
	}
}  

export default Noticias;