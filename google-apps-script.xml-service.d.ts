// Type definitions for Google Apps Script 2020-01-26
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />

declare namespace GoogleAppsScript {
  namespace XML {
    /**
     * A representation of an XML attribute.
     *
     *     // Reads the first and last name of each person and adds a new attribute with the full name.
     *     var xml = '<roster>'
     *         + '<person first="John" last="Doe"/>'
     *         + '<person first="Mary" last="Smith"/>'
     *         + '</roster>';
     *     var document = XmlService.parse(xml);
     *     var people = document.getRootElement().getChildren('person');
     *     for (var i = 0; i < people.length; i++) {
     *       var person = people[i];
     *       var firstName = person.getAttribute('first').getValue();
     *       var lastName = person.getAttribute('last').getValue();
     *       person.setAttribute('full', firstName + ' ' + lastName);
     *     }
     *     xml = XmlService.getPrettyFormat().format(document);
     *     Logger.log(xml);
     */
    interface Attribute {

      /**
       * Gets the local name of the attribute. If the attribute has a namespace prefix, use getNamespace().getPrefix() to get the prefix.
       * https://developers.google.com/apps-script/reference/xml-service/attribute#getName()
       */
      getName(): string;

      /**
       * Gets the namespace for the attribute.
       * https://developers.google.com/apps-script/reference/xml-service/attribute#getNamespace()
       */
      getNamespace(): Namespace;

      /**
       * Gets the value of the attribute.
       * https://developers.google.com/apps-script/reference/xml-service/attribute#getValue()
       */
      getValue(): string;

      /**
       * Sets the local name of the attribute. To set a namespace prefix for the attribute, use setNamespace(namespace) in conjunction with XmlService.getNamespace(prefix, uri).
       * https://developers.google.com/apps-script/reference/xml-service/attribute#setName(String)
       * @param name the local name to set
       */
      setName(name: string): Attribute;

      /**
       * Sets the namespace for the attribute. The namespace must have a prefix.
       * https://developers.google.com/apps-script/reference/xml-service/attribute#setNamespace(Namespace)
       * @param namespace the namespace to set
       */
      setNamespace(namespace: Namespace): Attribute;

      /**
       * Sets the value of the attribute.
       * https://developers.google.com/apps-script/reference/xml-service/attribute#setValue(String)
       * @param value the value to set
       */
      setValue(value: string): Attribute;
    }
    /**
     * A representation of an XML CDATASection node.
     *
     *     // Create and log an XML document that shows how special characters like '<', '>', and '&' are
     *     // stored in a CDATASection node as compared to in a Text node.
     *     var illegalCharacters = '<em>The Amazing Adventures of Kavalier & Clay</em>';
     *     var cdata = XmlService.createCdata(illegalCharacters);
     *     var text = XmlService.createText(illegalCharacters);
     *     var root = XmlService.createElement('root').addContent(cdata).addContent(text);
     *     var document = XmlService.createDocument(root);
     *     var xml = XmlService.getPrettyFormat().format(document);
     *     Logger.log(xml);
     */
    interface Cdata {

      /**
       * Appends the given text to any content that already exists in the node.
       * https://developers.google.com/apps-script/reference/xml-service/cdata#append(String)
       * @param text the text to append to the node
       */
      append(text: string): Text;

      /**
       * Detaches the node from its parent Element node. If the node does not have a parent,
       * this method has no effect.
       * https://developers.google.com/apps-script/reference/xml-service/cdata#detach()
       */
      detach(): Content;

      /**
       * Gets the node's parent Element node. If the node does not have a parent, this method
       * returns null.
       * https://developers.google.com/apps-script/reference/xml-service/cdata#getParentElement()
       */
      getParentElement(): Element;

      /**
       * Gets the text value of the Text node.
       * https://developers.google.com/apps-script/reference/xml-service/cdata#getText()
       */
      getText(): string;

      /**
       * Gets the text value of all nodes that are direct or indirect children of the node, in the order
       * they appear in the document.
       * https://developers.google.com/apps-script/reference/xml-service/cdata#getValue()
       */
      getValue(): string;

      /**
       * Sets the text value of the Text node.
       * https://developers.google.com/apps-script/reference/xml-service/cdata#setText(String)
       * @param text the text value to set
       */
      setText(text: string): Text;
    }
    /**
     * A representation of an XML Comment node.
     */
    interface Comment {

      /**
       * Detaches the node from its parent Element node. If the node does not have a parent,
       * this method has no effect.
       * https://developers.google.com/apps-script/reference/xml-service/comment#detach()
       */
      detach(): Content;

      /**
       * Gets the node's parent Element node. If the node does not have a parent, this method
       * returns null.
       * https://developers.google.com/apps-script/reference/xml-service/comment#getParentElement()
       */
      getParentElement(): Element;

      /**
       * Gets the text value of the Comment node.
       * https://developers.google.com/apps-script/reference/xml-service/comment#getText()
       */
      getText(): string;

      /**
       * Gets the text value of all nodes that are direct or indirect children of the node, in the order
       * they appear in the document.
       * https://developers.google.com/apps-script/reference/xml-service/comment#getValue()
       */
      getValue(): string;

      /**
       * Sets the text value of the Comment node.
       * https://developers.google.com/apps-script/reference/xml-service/comment#setText(String)
       * @param text the text value to set
       */
      setText(text: string): Comment;
    }
    /**
     * A representation of a generic XML node.
     * Implementing classes
     *
     * NameBrief description
     *
     * CdataA representation of an XML CDATASection node.
     *
     * CommentA representation of an XML Comment node.
     *
     * DocTypeA representation of an XML DocumentType node.
     *
     * ElementA representation of an XML Element node.
     *
     * EntityRefA representation of an XML EntityReference node.
     *
     * ProcessingInstructionA representation of an XML ProcessingInstruction node.
     *
     * TextA representation of an XML Text node.
     */
    interface Content {

      /**
       * Casts the node as a CDATASection node for the purposes of autocomplete. If the
       * node's ContentType is not already CDATA, this method returns null.
       * https://developers.google.com/apps-script/reference/xml-service/content#asCdata()
       */
      asCdata(): Cdata;

      /**
       * Casts the node as a Comment node for the purposes of autocomplete. If the node's
       * ContentType is not already COMMENT, this method returns null.
       * https://developers.google.com/apps-script/reference/xml-service/content#asComment()
       */
      asComment(): Comment;

      /**
       * Casts the node as a DocumentType node for the purposes of autocomplete. If
       * the node's ContentType is not already DOCTYPE, this method returns null.
       * https://developers.google.com/apps-script/reference/xml-service/content#asDocType()
       */
      asDocType(): DocType;

      /**
       * Casts the node as an Element node for the purposes of autocomplete. If the node's
       * ContentType is not already ELEMENT, this method returns null.
       * https://developers.google.com/apps-script/reference/xml-service/content#asElement()
       */
      asElement(): Element;

      /**
       * Casts the node as a EntityReference node for the purposes of autocomplete.
       * If the node's ContentType is not already ENTITYREF, this method returns
       * null.
       * https://developers.google.com/apps-script/reference/xml-service/content#asEntityRef()
       */
      asEntityRef(): EntityRef;

      /**
       * Casts the node as a ProcessingInstruction node for the purposes of autocomplete. If
       * the node's ContentType is not already PROCESSINGINSTRUCTION, this method
       * returns null.
       * https://developers.google.com/apps-script/reference/xml-service/content#asProcessingInstruction()
       */
      asProcessingInstruction(): ProcessingInstruction;

      /**
       * Casts the node as a Text node for the purposes of autocomplete. If the node's ContentType is not already TEXT, this method returns null.
       * https://developers.google.com/apps-script/reference/xml-service/content#asText()
       */
      asText(): Text;

      /**
       * Detaches the node from its parent Element node. If the node does not have a parent,
       * this method has no effect.
       * https://developers.google.com/apps-script/reference/xml-service/content#detach()
       */
      detach(): Content;

      /**
       * Gets the node's parent Element node. If the node does not have a parent, this method
       * returns null.
       * https://developers.google.com/apps-script/reference/xml-service/content#getParentElement()
       */
      getParentElement(): Element;

      /**
       * Gets the node's content type.
       * https://developers.google.com/apps-script/reference/xml-service/content#getType()
       */
      getType(): ContentType;

      /**
       * Gets the text value of all nodes that are direct or indirect children of the node, in the order
       * they appear in the document.
       * https://developers.google.com/apps-script/reference/xml-service/content#getValue()
       */
      getValue(): string;
    }
    /**
     * An enumeration representing the types of XML content nodes.
     */
    enum ContentType { CDATA, COMMENT, DOCTYPE, ELEMENT, ENTITYREF, PROCESSINGINSTRUCTION, TEXT }
    /**
     * A representation of an XML DocumentType node.
     */
    interface DocType {

      /**
       * Detaches the node from its parent Element node. If the node does not have a parent,
       * this method has no effect.
       * https://developers.google.com/apps-script/reference/xml-service/doc-type#detach()
       */
      detach(): Content;

      /**
       * Gets the name of the root Element node specified in the DocType declaration.
       * https://developers.google.com/apps-script/reference/xml-service/doc-type#getElementName()
       */
      getElementName(): string;

      /**
       * Gets the internal subset data for the DocumentType node.
       * https://developers.google.com/apps-script/reference/xml-service/doc-type#getInternalSubset()
       */
      getInternalSubset(): string;

      /**
       * Gets the node's parent Element node. If the node does not have a parent, this method
       * returns null.
       * https://developers.google.com/apps-script/reference/xml-service/doc-type#getParentElement()
       */
      getParentElement(): Element;

      /**
       * Gets the public ID of the external subset data for the DocumentType node.
       * https://developers.google.com/apps-script/reference/xml-service/doc-type#getPublicId()
       */
      getPublicId(): string;

      /**
       * Gets the system ID of the external subset data for the DocumentType node.
       * https://developers.google.com/apps-script/reference/xml-service/doc-type#getSystemId()
       */
      getSystemId(): string;

      /**
       * Gets the text value of all nodes that are direct or indirect children of the node, in the order
       * they appear in the document.
       * https://developers.google.com/apps-script/reference/xml-service/doc-type#getValue()
       */
      getValue(): string;

      /**
       * Sets the name of the root Element node to specify in the DocType
       * declaration.
       * https://developers.google.com/apps-script/reference/xml-service/doc-type#setElementName(String)
       * @param name the name of the root Element node to specify in the DocType declaration
       */
      setElementName(name: string): DocType;

      /**
       * Sets the internal subset data for the DocumentType node.
       * https://developers.google.com/apps-script/reference/xml-service/doc-type#setInternalSubset(String)
       * @param data the internal subset data to set
       */
      setInternalSubset(data: string): DocType;

      /**
       * Sets the public ID of the external subset data for the DocumentType node.
       * https://developers.google.com/apps-script/reference/xml-service/doc-type#setPublicId(String)
       * @param id the public ID of the external subset data to set
       */
      setPublicId(id: string): DocType;

      /**
       * Sets the system ID of the external subset data for the DocumentType node.
       * https://developers.google.com/apps-script/reference/xml-service/doc-type#setSystemId(String)
       * @param id the system ID of the external subset data to set
       */
      setSystemId(id: string): DocType;
    }
    /**
     * A representation of an XML document.
     */
    interface Document {

      /**
       * Appends the given node to the end of the document. The content argument can be a Content object or any node object that corresponds to a type listed in ContentType. Note, however, that a document can only have one child Element
       * node, which is implicitly the root Element node.
       * https://developers.google.com/apps-script/reference/xml-service/document#addContent(Content)
       * @param content the node to append
       */
      addContent(content: Content): Document;

      /**
       * Inserts the given node at the given index among all nodes that are immediate children of the
       * document. The content argument can be a Content object or any node object
       * that corresponds to a type listed in ContentType. Note, however, that a document
       * can only have one child Element node, which is implicitly the root Element
       * node.
       * https://developers.google.com/apps-script/reference/xml-service/document#addContent(Integer,Content)
       * @param index the index at which to insert the node among all nodes that are immediate children of the document
       * @param content the node to insert
       */
      addContent(index: Integer, content: Content): Document;

      /**
       * Creates unattached copies of all nodes that are immediate children of the document.
       * https://developers.google.com/apps-script/reference/xml-service/document#cloneContent()
       */
      cloneContent(): Content[];

      /**
       * Detaches and returns the document's root Element node. If the document does not have
       * a root Element node, this method returns null.
       * https://developers.google.com/apps-script/reference/xml-service/document#detachRootElement()
       */
      detachRootElement(): Element;

      /**
       * Gets all nodes that are immediate children of the document.
       * https://developers.google.com/apps-script/reference/xml-service/document#getAllContent()
       */
      getAllContent(): Content[];

      /**
       * Gets the node at the given index among all nodes that are immediate children of the
       * document. If there is no node at the given index, this method returns null.
       * https://developers.google.com/apps-script/reference/xml-service/document#getContent(Integer)
       * @param index the index for the node among all nodes that are immediate children of the document
       */
      getContent(index: Integer): Content;

      /**
       * Gets the number of nodes that are immediate children of the document.
       * https://developers.google.com/apps-script/reference/xml-service/document#getContentSize()
       */
      getContentSize(): Integer;

      /**
       * Gets all nodes that are direct or indirect children of the document, in the order they
       * appear in the document.
       * https://developers.google.com/apps-script/reference/xml-service/document#getDescendants()
       */
      getDescendants(): Content[];

      /**
       * Gets the document's DocType declaration. If the document does not have a DocumentType node, this method returns null.
       * https://developers.google.com/apps-script/reference/xml-service/document#getDocType()
       */
      getDocType(): DocType;

      /**
       * Gets the document's root Element node. If the document does not have a root Element node, this method returns null.
       * https://developers.google.com/apps-script/reference/xml-service/document#getRootElement()
       */
      getRootElement(): Element;

      /**
       * Determines whether the document has a root Element node.
       * https://developers.google.com/apps-script/reference/xml-service/document#hasRootElement()
       */
      hasRootElement(): boolean;

      /**
       * Removes all nodes that are immediate children of the document.
       * https://developers.google.com/apps-script/reference/xml-service/document#removeContent()
       */
      removeContent(): Content[];

      /**
       * Removes the given node, if the node is an immediate child of the document. The content argument can be a Content object or any node object that corresponds to a
       * type listed in ContentType.
       * https://developers.google.com/apps-script/reference/xml-service/document#removeContent(Content)
       * @param content the node to remove
       */
      removeContent(content: Content): boolean;

      /**
       * Removes the node at the given index among all nodes that are immediate children of the
       * document. If there is no node at the given index, this method returns null.
       * https://developers.google.com/apps-script/reference/xml-service/document#removeContent(Integer)
       * @param index the index for the node among all nodes that are immediate children of the document
       */
      removeContent(index: Integer): Content;

      /**
       * Sets the document's DocType declaration. If the document already has a different
       * DocType node, this method overwrites the old node. This method throws an exception if
       * the document already contains the same DocType node that is being set.
       * https://developers.google.com/apps-script/reference/xml-service/document#setDocType(DocType)
       * @param docType the DocumentType to set
       */
      setDocType(docType: DocType): Document;

      /**
       * Sets the document's root Element node. If the document already has a root Element node, this method overwrites the old node.
       * https://developers.google.com/apps-script/reference/xml-service/document#setRootElement(Element)
       * @param element the root Element node to set
       */
      setRootElement(element: Element): Document;
    }
    /**
     * A representation of an XML Element node.
     *
     *     // Adds up the values listed in a sample XML document and adds a new element with the total.
     *     var xml = '<things>'
     *         + '<plates>12</plates>'
     *         + '<bowls>18</bowls>'
     *         + '<cups>25</cups>'
     *         + '</things>';
     *     var document = XmlService.parse(xml);
     *     var root = document.getRootElement();
     *     var items = root.getChildren();
     *     var total = 0;
     *     for (var i = 0; i < items.length; i++) {
     *       total += Number(items[i].getText());
     *     }
     *     var totalElement = XmlService.createElement('total').setText(total);
     *     root.addContent(totalElement);
     *     xml = XmlService.getPrettyFormat().format(document);
     *     Logger.log(xml);
     */
    interface Element {

      /**
       * Appends the given node as the last child of the Element node. The content
       * argument can be a Element object or any node object that corresponds to a type
       * listed in ContentType.
       * https://developers.google.com/apps-script/reference/xml-service/element#addContent(Content)
       * @param content the node to append
       */
      addContent(content: Content): Element;

      /**
       * Inserts the given node at the given index among all nodes that are immediate children of the
       * Element node. The content argument can be a Element object or any
       * node object that corresponds to a type listed in ContentType.
       * https://developers.google.com/apps-script/reference/xml-service/element#addContent(Integer,Content)
       * @param index the index at which to insert the node among all nodes that are immediate children of the Element node
       * @param content the node to insert
       */
      addContent(index: Integer, content: Content): Element;

      /**
       * Creates unattached copies of all nodes that are immediate children of the {@code Element} node.
       * https://developers.google.com/apps-script/reference/xml-service/element#cloneContent()
       */
      cloneContent(): Content[];

      /**
       * Detaches the node from its parent Element node. If the node does not have a parent,
       * this method has no effect.
       * https://developers.google.com/apps-script/reference/xml-service/element#detach()
       */
      detach(): Content;

      /**
       * Gets all nodes that are immediate children of the {@code Element} node.
       * https://developers.google.com/apps-script/reference/xml-service/element#getAllContent()
       */
      getAllContent(): Content[];

      /**
       * Gets the attribute for this Element node with the given name and no namespace. If there
       * is no such attribute, this method returns null.
       * https://developers.google.com/apps-script/reference/xml-service/element#getAttribute(String)
       * @param name the name of the attribute
       */
      getAttribute(name: string): Attribute;

      /**
       * Gets the attribute for this Element node with the given name and namespace. If there is
       * no such node, this method returns null.
       * https://developers.google.com/apps-script/reference/xml-service/element#getAttribute(String,Namespace)
       * @param name the name of the attribute
       * @param namespace the namespace of the attribute
       */
      getAttribute(name: string, namespace: Namespace): Attribute;

      /**
       * Gets all attributes for this Element node, in the order they appear in the document.
       * https://developers.google.com/apps-script/reference/xml-service/element#getAttributes()
       */
      getAttributes(): Attribute[];

      /**
       * Gets the first Element node with the given name and no namespace that is an immediate
       * child of this Element node. If there is no such node, this method returns null.
       * https://developers.google.com/apps-script/reference/xml-service/element#getChild(String)
       * @param name the name of the child Element node
       */
      getChild(name: string): Element;

      /**
       * Gets the first Element node with the given name and namespace that is an immediate
       * child of this Element node. If there is no such node, this method returns null.
       * https://developers.google.com/apps-script/reference/xml-service/element#getChild(String,Namespace)
       * @param name the name of the child Element node
       * @param namespace the namespace of the child Element node
       */
      getChild(name: string, namespace: Namespace): Element;

      /**
       * Gets the text value of the node with the given name and no namespace, if the node is an
       * immediate child of the Element node. If there is no such node, this method returns
       * null.
       * https://developers.google.com/apps-script/reference/xml-service/element#getChildText(String)
       * @param name the name of the child node
       */
      getChildText(name: string): string;

      /**
       * Gets the text value of the node with the given name and namespace, if the node is an immediate
       * child of the Element node. If there is no such node, this method returns null.
       * https://developers.google.com/apps-script/reference/xml-service/element#getChildText(String,Namespace)
       * @param name the name of the child node
       * @param namespace the namespace of the child node
       */
      getChildText(name: string, namespace: Namespace): string;

      /**
       * Gets all Element nodes that are immediate children of this Element node, in the
       * order they appear in the document.
       * https://developers.google.com/apps-script/reference/xml-service/element#getChildren()
       */
      getChildren(): Element[];

      /**
       * Gets all Element nodes with the given name and no namespace that are immediate children
       * of this Element node, in the order they appear in the document.
       * https://developers.google.com/apps-script/reference/xml-service/element#getChildren(String)
       * @param name the name of the child Element nodes
       */
      getChildren(name: string): Element[];

      /**
       * Gets all Element nodes with the given name and namespace that are immediate children of
       * this Element node, in the order they appear in the document.
       * https://developers.google.com/apps-script/reference/xml-service/element#getChildren(String,Namespace)
       * @param name the name of the child Element nodes
       * @param namespace the namespace of the child Element nodes
       */
      getChildren(name: string, namespace: Namespace): Element[];

      /**
       * Gets the node at the given index among all nodes that are immediate children of the
       * {@code Element} node. If there is no node at the given index, this method returns null.
       * https://developers.google.com/apps-script/reference/xml-service/element#getContent(Integer)
       * @param index the index for the node among all nodes that are immediate children of the {@code Element} node
       */
      getContent(index: Integer): Content;

      /**
       * Gets the number of nodes that are immediate children of the {@code Element} node.
       * https://developers.google.com/apps-script/reference/xml-service/element#getContentSize()
       */
      getContentSize(): Integer;

      /**
       * Gets all nodes that are direct or indirect children of the {@code Element} node, in the order they
       * appear in the document.
       * https://developers.google.com/apps-script/reference/xml-service/element#getDescendants()
       */
      getDescendants(): Content[];

      /**
       * Gets the XML document that contains the {@code Element} node.
       * https://developers.google.com/apps-script/reference/xml-service/element#getDocument()
       */
      getDocument(): Document;

      /**
       * Gets the local name of the Element node. If the node has a namespace prefix, use getQualifiedName() or getNamespace().getPrefix() to
       * get the prefix.
       * https://developers.google.com/apps-script/reference/xml-service/element#getName()
       */
      getName(): string;

      /**
       * Gets the namespace for the Element node.
       * https://developers.google.com/apps-script/reference/xml-service/element#getNamespace()
       */
      getNamespace(): Namespace;

      /**
       * Gets the namespace with the given prefix for the Element node.
       * https://developers.google.com/apps-script/reference/xml-service/element#getNamespace(String)
       * @param prefix the prefix for the namespace
       */
      getNamespace(prefix: string): Namespace;

      /**
       * Gets the node's parent Element node. If the node does not have a parent, this method
       * returns null.
       * https://developers.google.com/apps-script/reference/xml-service/element#getParentElement()
       */
      getParentElement(): Element;

      /**
       * Gets the local name and namespace prefix of the Element node, in the form [namespacePrefix]:[localName]. If the node does not have a namespace prefix, use getName().
       * https://developers.google.com/apps-script/reference/xml-service/element#getQualifiedName()
       */
      getQualifiedName(): string;

      /**
       * Gets the text value of the Element node.
       * https://developers.google.com/apps-script/reference/xml-service/element#getText()
       */
      getText(): string;

      /**
       * Gets the text value of all nodes that are direct or indirect children of the node, in the order
       * they appear in the document.
       * https://developers.google.com/apps-script/reference/xml-service/element#getValue()
       */
      getValue(): string;

      /**
       * Determines whether this Element node is a direct or indirect parent of a given Element node.
       * https://developers.google.com/apps-script/reference/xml-service/element#isAncestorOf(Element)
       * @param other the other Element node
       */
      isAncestorOf(other: Element): boolean;

      /**
       * Determines whether the Element node is the document's root node.
       * https://developers.google.com/apps-script/reference/xml-service/element#isRootElement()
       */
      isRootElement(): boolean;

      /**
       * Removes the given attribute for this Element node, if such an attribute exists.
       * https://developers.google.com/apps-script/reference/xml-service/element#removeAttribute(Attribute)
       * @param attribute the attribute
       */
      removeAttribute(attribute: Attribute): boolean;

      /**
       * Removes the attribute for this Element node with the given name and no namespace, if
       * such an attribute exists.
       * https://developers.google.com/apps-script/reference/xml-service/element#removeAttribute(String)
       * @param attributeName the name of the attribute
       */
      removeAttribute(attributeName: string): boolean;

      /**
       * Removes the attribute for this Element node with the given name and namespace, if such
       * an attribute exists.
       * https://developers.google.com/apps-script/reference/xml-service/element#removeAttribute(String,Namespace)
       * @param attributeName the name of the attribute
       * @param namespace the namespace of the attribute
       */
      removeAttribute(attributeName: string, namespace: Namespace): boolean;

      /**
       * Removes all nodes that are immediate children of the {@code Element} node.
       * https://developers.google.com/apps-script/reference/xml-service/element#removeContent()
       */
      removeContent(): Content[];

      /**
       * Removes the given node, if the node is an immediate child of the {@code Element} node. The content argument can be a Element object or any node object that corresponds to a
       * type listed in ContentType.
       * https://developers.google.com/apps-script/reference/xml-service/element#removeContent(Content)
       * @param content the node to remove
       */
      removeContent(content: Content): boolean;

      /**
       * Removes the node at the given index among all nodes that are immediate children of the
       * {@code Element} node. If there is no node at the given index, this method returns null.
       * https://developers.google.com/apps-script/reference/xml-service/element#removeContent(Integer)
       * @param index the index for the node among all nodes that are immediate children of the {@code Element} node
       */
      removeContent(index: Integer): Content;

      /**
       * Sets the given attribute for this Element node.
       * https://developers.google.com/apps-script/reference/xml-service/element#setAttribute(Attribute)
       * @param attribute the attribute to set
       */
      setAttribute(attribute: Attribute): Element;

      /**
       * Sets the attribute for this Element node with the given name, value, and no namespace.
       * https://developers.google.com/apps-script/reference/xml-service/element#setAttribute(String,String)
       * @param name the name of the attribute to set
       * @param value the value of the attribute to set
       */
      setAttribute(name: string, value: string): Element;

      /**
       * Sets the attribute for this Element node with the given name, value, and namespace.
       * https://developers.google.com/apps-script/reference/xml-service/element#setAttribute(String,String,Namespace)
       * @param name the name of the attribute to set
       * @param value the value of the attribute to set
       * @param namespace the namespace of the attribute to set
       */
      setAttribute(name: string, value: string, namespace: Namespace): Element;

      /**
       * Sets the local name of the Element node. To set a namespace prefix for the node, use
       * setNamespace(namespace) in conjunction with XmlService.getNamespace(prefix, uri).
       * https://developers.google.com/apps-script/reference/xml-service/element#setName(String)
       * @param name the local name to set
       */
      setName(name: string): Element;

      /**
       * Sets the namespace for the Element node.
       * https://developers.google.com/apps-script/reference/xml-service/element#setNamespace(Namespace)
       * @param namespace the namespace to set
       */
      setNamespace(namespace: Namespace): Element;

      /**
       * Sets the text value of the Element node. If the node already contains a text value or
       * any child nodes, this method overwrites the old content. To append or insert content instead,
       * use addContent(content) or addContent(index, content).
       * https://developers.google.com/apps-script/reference/xml-service/element#setText(String)
       * @param text the text to set
       */
      setText(text: string): Element;
    }
    /**
     * A representation of an XML EntityReference node.
     */
    interface EntityRef {

      /**
       * Detaches the node from its parent Element node. If the node does not have a parent,
       * this method has no effect.
       * https://developers.google.com/apps-script/reference/xml-service/entity-ref#detach()
       */
      detach(): Content;

      /**
       * Gets the name of the EntityReference node.
       * https://developers.google.com/apps-script/reference/xml-service/entity-ref#getName()
       */
      getName(): string;

      /**
       * Gets the node's parent Element node. If the node does not have a parent, this method
       * returns null.
       * https://developers.google.com/apps-script/reference/xml-service/entity-ref#getParentElement()
       */
      getParentElement(): Element;

      /**
       * Gets the public ID of the EntityReference node. If the node does not have a public ID,
       * this method returns null.
       * https://developers.google.com/apps-script/reference/xml-service/entity-ref#getPublicId()
       */
      getPublicId(): string;

      /**
       * Gets the system ID of the EntityReference node. If the node does not have a system ID,
       * this method returns null.
       * https://developers.google.com/apps-script/reference/xml-service/entity-ref#getSystemId()
       */
      getSystemId(): string;

      /**
       * Gets the text value of all nodes that are direct or indirect children of the node, in the order
       * they appear in the document.
       * https://developers.google.com/apps-script/reference/xml-service/entity-ref#getValue()
       */
      getValue(): string;

      /**
       * Sets the name of the EntityReference node.
       * https://developers.google.com/apps-script/reference/xml-service/entity-ref#setName(String)
       * @param name the name to set
       */
      setName(name: string): EntityRef;

      /**
       * Sets the public ID of the EntityReference node.
       * https://developers.google.com/apps-script/reference/xml-service/entity-ref#setPublicId(String)
       * @param id the public ID to set
       */
      setPublicId(id: string): EntityRef;

      /**
       * Sets the system ID of the EntityReference node.
       * https://developers.google.com/apps-script/reference/xml-service/entity-ref#setSystemId(String)
       * @param id the system ID to set
       */
      setSystemId(id: string): EntityRef;
    }
    /**
     * A formatter for outputting an XML document, with three pre-defined formats that can be further
     * customized.
     *
     *     // Log an XML document with specified formatting options.
     *     var xml = '<root><a><b>Text!</b><b>More text!</b></a></root>';
     *     var document = XmlService.parse(xml);
     *     var output = XmlService.getCompactFormat()
     *         .setLineSeparator('\n')
     *         .setEncoding('UTF-8')
     *         .setIndent('   ')
     *         .format(document);
     *     Logger.log(output);
     */
    interface Format {

      /**
       * Outputs the given Document as a formatted string.
       * https://developers.google.com/apps-script/reference/xml-service/format#format(Document)
       * @param document the document to format
       */
      format(document: Document): string;

      /**
       * Outputs the given Element node as a formatted string.
       * https://developers.google.com/apps-script/reference/xml-service/format#format(Element)
       * @param element the element to format
       */
      format(element: Element): string;

      /**
       * Sets the character encoding that the formatter should use. The encoding argument must
       * be an accepted XML encoding like ISO-8859-1, US-ASCII, UTF-8, or UTF-16.
       *
       *
       *     // Log an XML document with encoding that does not support certain special characters.
       *     var xml = '<root><a><b>ಠ‿ಠ</b><b>ಠ‿ಠ</b></a></root>';
       *     var document = XmlService.parse(xml);
       *     var output = XmlService.getRawFormat()
       *         .setEncoding('ISO-8859-1')
       *         .format(document);
       *     Logger.log(output);
       * https://developers.google.com/apps-script/reference/xml-service/format#setEncoding(String)
       * @param encoding the encoding to use
       */
      setEncoding(encoding: string): Format;

      /**
       * Sets the string used to indent child nodes relative to their parents. Setting an indent other
       * than null will cause the formatter to insert a line break after every node.
       *
       *
       *     // Log an XML document with each child node indented four spaces.
       *     var xml = '<root><a><b>Text!</b><b>More text!</b></a></root>';
       *     var document = XmlService.parse(xml);
       *     var output = XmlService.getCompactFormat()
       *         .setIndent('    ')
       *         .format(document);
       *     Logger.log(output);
       * https://developers.google.com/apps-script/reference/xml-service/format#setIndent(String)
       * @param indent the indent to use
       */
      setIndent(indent: string): Format;

      /**
       * Sets the string to insert whenever the formatter would normally insert a line break. The three
       * pre-defined formatters have different conditions under which they insert a line break. The
       * default line separator is \r\n.
       *
       *
       *     // Log an XML document with several spaces and a pipe character in place of line breaks.
       *     var xml = '<root><a><b>Text!</b><b>More text!</b></a></root>';
       *     var document = XmlService.parse(xml);
       *     var output = XmlService.getRawFormat()
       *         .setLineSeparator(' | ')
       *         .format(document);
       *     Logger.log(output);
       * https://developers.google.com/apps-script/reference/xml-service/format#setLineSeparator(String)
       * @param separator the separator to use
       */
      setLineSeparator(separator: string): Format;

      /**
       * Sets whether the formatter should omit the XML declaration, such as <?xml version="1.0"
       * encoding="UTF-8"?>.
       * https://developers.google.com/apps-script/reference/xml-service/format#setOmitDeclaration(Boolean)
       * @param omitDeclaration true to omit the XML declaration; false to include it
       */
      setOmitDeclaration(omitDeclaration: boolean): Format;

      /**
       * Sets whether the formatter should omit the encoding in the XML declaration, such as the
       * encoding field in <?xml version="1.0" encoding="UTF-8"?>.
       * https://developers.google.com/apps-script/reference/xml-service/format#setOmitEncoding(Boolean)
       * @param omitEncoding true to omit the encoding in the XML declaration; false to include it
       */
      setOmitEncoding(omitEncoding: boolean): Format;
    }
    /**
     * A representation of an XML namespace.
     */
    interface Namespace {

      /**
       * Gets the prefix for the namespace.
       * https://developers.google.com/apps-script/reference/xml-service/namespace#getPrefix()
       */
      getPrefix(): string;

      /**
       * Gets the URI for the namespace.
       * https://developers.google.com/apps-script/reference/xml-service/namespace#getURI()
       */
      getURI(): string;
    }
    /**
     * A representation of an XML ProcessingInstruction node.
     */
    interface ProcessingInstruction {

      /**
       * Detaches the node from its parent Element node. If the node does not have a parent,
       * this method has no effect.
       * https://developers.google.com/apps-script/reference/xml-service/processing-instruction#detach()
       */
      detach(): Content;

      /**
       * Gets the raw data for every instruction in the ProcessingInstruction node.
       * https://developers.google.com/apps-script/reference/xml-service/processing-instruction#getData()
       */
      getData(): string;

      /**
       * Gets the node's parent Element node. If the node does not have a parent, this method
       * returns null.
       * https://developers.google.com/apps-script/reference/xml-service/processing-instruction#getParentElement()
       */
      getParentElement(): Element;

      /**
       * Gets the target for the ProcessingInstruction node.
       * https://developers.google.com/apps-script/reference/xml-service/processing-instruction#getTarget()
       */
      getTarget(): string;

      /**
       * Gets the text value of all nodes that are direct or indirect children of the node, in the order
       * they appear in the document.
       * https://developers.google.com/apps-script/reference/xml-service/processing-instruction#getValue()
       */
      getValue(): string;
    }
    /**
     * A representation of an XML Text node.
     */
    interface Text {

      /**
       * Appends the given text to any content that already exists in the node.
       * https://developers.google.com/apps-script/reference/xml-service/text#append(String)
       * @param text the text to append to the node
       */
      append(text: string): Text;

      /**
       * Detaches the node from its parent Element node. If the node does not have a parent,
       * this method has no effect.
       * https://developers.google.com/apps-script/reference/xml-service/text#detach()
       */
      detach(): Content;

      /**
       * Gets the node's parent Element node. If the node does not have a parent, this method
       * returns null.
       * https://developers.google.com/apps-script/reference/xml-service/text#getParentElement()
       */
      getParentElement(): Element;

      /**
       * Gets the text value of the Text node.
       * https://developers.google.com/apps-script/reference/xml-service/text#getText()
       */
      getText(): string;

      /**
       * Gets the text value of all nodes that are direct or indirect children of the node, in the order
       * they appear in the document.
       * https://developers.google.com/apps-script/reference/xml-service/text#getValue()
       */
      getValue(): string;

      /**
       * Sets the text value of the Text node.
       * https://developers.google.com/apps-script/reference/xml-service/text#setText(String)
       * @param text the text value to set
       */
      setText(text: string): Text;
    }
    /**
     * This service allows scripts to parse, navigate, and programmatically create XML documents.
     *
     *     // Log the title and labels for the first page of blog posts on the G Suite Developer blog.
     *     function parseXml() {
     *       var url = 'https://gsuite-developers.googleblog.com/atom.xml';
     *       var xml = UrlFetchApp.fetch(url).getContentText();
     *       var document = XmlService.parse(xml);
     *       var root = document.getRootElement();
     *       var atom = XmlService.getNamespace('http://www.w3.org/2005/Atom');
     *
     *       var entries = root.getChildren('entry', atom);
     *       for (var i = 0; i < entries.length; i++) {
     *         var title = entries[i].getChild('title', atom).getText();
     *         var categoryElements = entries[i].getChildren('category', atom);
     *         var labels = [];
     *         for (var j = 0; j < categoryElements.length; j++) {
     *           labels.push(categoryElements[j].getAttribute('term').getValue());
     *         }
     *         Logger.log('%s (%s)', title, labels.join(', '));
     *       }
     *     }
     *
     *     // Create and log an XML representation of the threads in your Gmail inbox.
     *     function createXml() {
     *       var root = XmlService.createElement('threads');
     *       var threads = GmailApp.getInboxThreads();
     *       for (var i = 0; i < threads.length; i++) {
     *         var child = XmlService.createElement('thread')
     *             .setAttribute('messageCount', threads[i].getMessageCount())
     *             .setAttribute('isUnread', threads[i].isUnread())
     *             .setText(threads[i].getFirstMessageSubject());
     *         root.addContent(child);
     *       }
     *       var document = XmlService.createDocument(root);
     *       var xml = XmlService.getPrettyFormat().format(document);
     *       Logger.log(xml);
     *     }
     */
    interface XmlService {
      ContentTypes: typeof ContentType;

      /**
       * Creates an unattached CDATASection node with the given value.
       * https://developers.google.com/apps-script/reference/xml-service/xml-service#createCdata(String)
       * @param text the value to set
       */
      createCdata(text: string): Cdata;

      /**
       * Creates an unattached Comment node with the given value.
       * https://developers.google.com/apps-script/reference/xml-service/xml-service#createComment(String)
       * @param text the value to set
       */
      createComment(text: string): Comment;

      /**
       * Creates an unattached DocumentType node for the root Element node
       * with the given name.
       * https://developers.google.com/apps-script/reference/xml-service/xml-service#createDocType(String)
       * @param elementName the name of the root Element node to specify in the DocType declaration
       */
      createDocType(elementName: string): DocType;

      /**
       * Creates an unattached DocumentType node for the root Element node
       * with the given name, and the given system ID for the external subset data.
       * https://developers.google.com/apps-script/reference/xml-service/xml-service#createDocType(String,String)
       * @param elementName the name of the root Element node to specify in the DocType declaration
       * @param systemId the system ID of the external subset data to set
       */
      createDocType(elementName: string, systemId: string): DocType;

      /**
       * Creates an unattached DocumentType node for the root Element node
       * with the given name, and the given public ID and system ID for the external subset data.
       * https://developers.google.com/apps-script/reference/xml-service/xml-service#createDocType(String,String,String)
       * @param elementName the name of the root Element node to specify in the DocType declaration
       * @param publicId the public ID of the external subset data to set
       * @param systemId the system ID of the external subset data to set
       */
      createDocType(elementName: string, publicId: string, systemId: string): DocType;

      /**
       * Creates an empty XML document.
       * https://developers.google.com/apps-script/reference/xml-service/xml-service#createDocument()
       */
      createDocument(): Document;

      /**
       * Creates an XML document with the given root Element node.
       * https://developers.google.com/apps-script/reference/xml-service/xml-service#createDocument(Element)
       * @param rootElement the root Element node to set
       */
      createDocument(rootElement: Element): Document;

      /**
       * Creates an unattached Element node with the given local name and no namespace.
       * https://developers.google.com/apps-script/reference/xml-service/xml-service#createElement(String)
       * @param name the local name to set
       */
      createElement(name: string): Element;

      /**
       * Creates an unattached Element node with the given local name and namespace.
       * https://developers.google.com/apps-script/reference/xml-service/xml-service#createElement(String,Namespace)
       * @param name the local name to set
       * @param namespace the namespace to set
       */
      createElement(name: string, namespace: Namespace): Element;

      /**
       * Creates an unattached Text node with the given value.
       * https://developers.google.com/apps-script/reference/xml-service/xml-service#createText(String)
       * @param text the value to set
       */
      createText(text: string): Text;

      /**
       * Creates a Format object for outputting a compact XML document. The formatter
       * defaults to UTF-8 encoding, no indentation, and no additional line breaks, but includes
       * the XML declaration and its encoding.
       *
       *
       *     // Log an XML document in compact form.
       *     var xml = '<root><a><b>Text!</b><b>More text!</b></a></root>';
       *     var document = XmlService.parse(xml);
       *     var output = XmlService.getCompactFormat()
       *         .format(document);
       *     Logger.log(output);
       * https://developers.google.com/apps-script/reference/xml-service/xml-service#getCompactFormat()
       */
      getCompactFormat(): Format;

      /**
       * Creates a Namespace with the given URI.
       * https://developers.google.com/apps-script/reference/xml-service/xml-service#getNamespace(String)
       * @param uri the URI for the namespace
       */
      getNamespace(uri: string): Namespace;

      /**
       * Creates a Namespace with the given prefix and URI.
       * https://developers.google.com/apps-script/reference/xml-service/xml-service#getNamespace(String,String)
       * @param prefix the prefix for the namespace
       * @param uri the URI for the namespace
       */
      getNamespace(prefix: string, uri: string): Namespace;

      /**
       * Creates a Namespace that represents the absence of a real namespace.
       * https://developers.google.com/apps-script/reference/xml-service/xml-service#getNoNamespace()
       */
      getNoNamespace(): Namespace;

      /**
       * Creates a Format object for outputting a human-readable XML document. The formatter
       * defaults to UTF-8 encoding, two-space indentation, \r\n line separators after
       * every node, and includes the XML declaration and its encoding.
       *
       *
       *     // Log an XML document in human-readable form.
       *     var xml = '<root><a><b>Text!</b><b>More text!</b></a></root>';
       *     var document = XmlService.parse(xml);
       *     var output = XmlService.getPrettyFormat()
       *         .format(document);
       *     Logger.log(output);
       * https://developers.google.com/apps-script/reference/xml-service/xml-service#getPrettyFormat()
       */
      getPrettyFormat(): Format;

      /**
       * Creates a Format object for outputting a raw XML document. The formatter defaults to
       * UTF-8 encoding, no indentation and no line breaks other than those provided in the XML
       * document itself, and includes the XML declaration and its encoding.
       *
       *
       *     // Log an XML document in raw form.
       *     var xml = '<root><a><b>Text!</b><b>More text!</b></a></root>';
       *     var document = XmlService.parse(xml);
       *     var output = XmlService.getRawFormat()
       *         .format(document);
       *     Logger.log(output);
       * https://developers.google.com/apps-script/reference/xml-service/xml-service#getRawFormat()
       */
      getRawFormat(): Format;

      /**
       * Creates a Namespace with the standard xml prefix.
       * https://developers.google.com/apps-script/reference/xml-service/xml-service#getXmlNamespace()
       */
      getXmlNamespace(): Namespace;

      /**
       * Creates an Document from the given XML, without validating the XML.
       *
       *
       *     var xml = '<root><a><b>Text!</b><b>More text!</b></a></root>';
       *     var doc = XmlService.parse(xml);
       * https://developers.google.com/apps-script/reference/xml-service/xml-service#parse(String)
       * @param xml the XML to parse
       */
      parse(xml: string): Document;
    }
  }
}

declare var XmlService: GoogleAppsScript.XML.XmlService;
