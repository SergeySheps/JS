'use strict';

/**************************************************************************************************
 *                                                                                                *
 * Перед началом работы с заданием, пожалуйста ознакомьтесь с туториалом:                         *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object        *
 *                                                                                                *
 **************************************************************************************************/


/**
 * Возвращает объект Прямоугольник (rectangle) с параметрами высота (height) и ширина (width)
 * и методом getArea(), который возвращает площадь
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    var r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */
function Rectangle(width, height) {
    let obj = {
        width:width,
        height:height,
        getArea(){
            return this.width * this.height;
        }
    }
    return obj;
}


/**
 * Возвращает JSON представление объекта
 *
 * @param {object} obj
 * @return {string}
 *
 * @example
 *    [1,2,3]   =>  '[1,2,3]'
 *    { width: 10, height : 20 } => '{"height":10,"width":20}'
 */
function getJSON(obj) {
    return JSON.stringify(obj);
}


/**
 * Возвращает объект указанного типа из представления JSON
 *
 * @param {Object} proto
 * @param {string} json
 * @return {object}
 *
 * @example
 *    var r = fromJSON(Rectangle.prototype, '{"width":10, "height":20}');
 *
 */
function fromJSON(proto, json) {
    //console.log(Object.assign(new Object(proto),new proto.constructor(),JSON.parse(json)));
    //return Object.assign(new Object(proto),new proto.constructor(),JSON.parse(json));
    //что просит то и возвращает, но тест не проходит....
    throw new Error('Not implemented');
}



/**
 * Создатель css селекторов
 *
 * Каждый комплексый селектор может состоять из эелемента, id, класса, атрибута, псевдо-класса и
 * псевдо-элемента
 *
 *    element#id.class[attr]:pseudoClass::pseudoElement
 *              \----/\----/\----------/
 *              Может быть несколько вхождений
 *
 * Любые варианты селекторов могут быть скомбинированы с помощью ' ','+','~','>' .
 *
 * Задача состоит в том, чтобы создать отдельный класс, независимые классы или
 * иерархию классов и реализовать функциональность
 * для создания селекторов css с использованием предоставленного cssSelectorBuilder.
 * Каждый селектор должен иметь метод stringify ()
 * для вывода строкового представления в соответствии с спецификацией css.
 *
 * Созданный cssSelectorBuilder должен использоваться как фасад
 * только для создания ваших собственных классов,
 * например, первый метод cssSelectorBuilder может быть таким:
 *
 * Дизайн класса(ов) полностью зависит от вас,
 * но постарайтесь сделать его максимально простым, понятным и читаемым насколько это возможно.
 *
 * @example
 *
 *  var builder = cssSelectorBuilder;
 *
 *  builder.id('main').class('container').class('editable').stringify()  => '#main.container.editable'
 *
 *  builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify()  => 'a[href$=".png"]:focus'
 *
 *  builder.combine(
 *      builder.element('div').id('main').class('container').class('draggable'),
 *      '+',
 *      builder.combine(
 *          builder.element('table').id('data'),
 *          '~',
 *           builder.combine(
 *               builder.element('tr').pseudoClass('nth-of-type(even)'),
 *               ' ',
 *               builder.element('td').pseudoClass('nth-of-type(even)')
 *           )
 *      )
 *  ).stringify()        =>    'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)'
 *
 *  Если нужно больше примеров - можете посмотреть юнит тесты.
 */

const cssSelectorBuilder = {
    //str:"",
    element: function(value) {
        throw new Error('Not implemented');
        this.str +=''+value;
        return this;
    },

    id: function(value) {
        throw new Error('Not implemented');
        this.str +=`#${value}`;
        return this;
    },

    class: function(value) {
        throw new Error('Not implemented');
        this.str +=`.${value}`;
        return this;
    },

    attr: function(value) {
        throw new Error('Not implemented');
        this.str +=`[${value}]`;
        return this;
    },

    pseudoClass: function(value) {
        throw new Error('Not implemented');
        this.str +=`:${value}`;
        return this;
    },

    pseudoElement: function(value) {
        throw new Error('Not implemented');
        this.str +=`::${value}`;
        return this;
  
    },

    combine: function(selector1, combinator, selector2) {
        throw new Error('Not implemented');
        this.str +=`${selector1} ${combinator} ${selector2}`;
        return this;
    },
    stringify(){
        throw new Error('Not implemented');
        let res = this.str;
        this.str ='';
        return res;
    }
    
};

var builder = cssSelectorBuilder;
 
 //console.log(builder.id('main').class('container').class('editable').stringify());
 //console.log(builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify());
 /*console.log(builder.combine(
          builder.element('div').id('main'),
          '+',
          builder.combine(
              builder.element('table').id('data'),
              '~',
               builder.combine(
                   builder.element('tr').pseudoClass('nth-of-type(even)'),
                   ' ',
                   builder.element('td').pseudoClass('nth-of-type(even)')
               )
          )
      ).stringify() );*/ // Не решено, сначала вызывает элементы, а на обратном пути combine
//'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)'

module.exports = {
    Rectangle: Rectangle,
    getJSON: getJSON,
    fromJSON: fromJSON,
    cssSelectorBuilder: cssSelectorBuilder
};
