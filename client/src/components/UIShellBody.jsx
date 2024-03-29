import React, { Component } from 'react';
import DisplayForm from '../pattern-components/DisplayForm';
import ValidatingForm from '../pattern-components/ValidatingForm';
import UpdateForm from '../pattern-components/UpdateForm';
import ValidatingFormWizard1 from '../pattern-components/ValidatingFormWizard1';
import ValidatingFormWizard2 from '../pattern-components/ValidatingFormWizard2';
import SimpleList from '../pattern-components/SimpleList';
import TableList from '../pattern-components/TableList';
import ListToList from '../pattern-components/ListToList';
import LinkedList from '../pattern-components/LinkedList';
import MasterDetail from '../pattern-components/MasterDetail';
import CreateReadUpdateDelete from '../pattern-components/CreateReadUpdateDelete';
import SearchList from '../pattern-components/SearchList';
import SearchForm from '../pattern-components/SearchForm';
import StockItemList from '../pattern-components/StockItemList';
import '../pattern-components/patterns.scss';

class UIShellBody extends Component {
  components = {
    'Stock Items': StockItemList
  };
  render() {
    const PatternName = this.components[
      this.props.patternName || 'Stock Items'
    ];
    return (
      <div className="pattern-container">
        <PatternName
          showDescription={true}
          stockService={this.props.stockService}
        />
      </div>
    );
  }
}
export default UIShellBody;
