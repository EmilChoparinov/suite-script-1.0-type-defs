
/*
   -----------------------------------------------------------------------------

                        GLOBAL METHODS AND CONSTANTS

   -----------------------------------------------------------------------------
*/

/**
 * Adds/subtracts a number of days to or from a date object
 * 
 * @param d Date object
 * 
 * @param days Number of days being added to the date
 * 
 * @returns Date object corresponding to date that was passed in, plus 
 * the days you added or subtracted
 */
declare const nlapiAddDays: (d: Date, days: number) => Date;

/**
 * Adds/subtracts a number of months to or from a date object
 * 
 * @param d Date object
 * 
 * @param months number of months being added to the date
 * 
 * @returns Date object corresponding to date that was passed in, plus the 
 * months you added or subtracted
 */
declare const nlapiAddMonths: (d: Date, months: number) => Date;

/**
 * Attaches a single record to another record. This API is supported in client,
 * user event, scheduled, and Suitelet scripts.
 * 
 * @param type The record ID for the type of record to attach. 
 * For a list of supported record types and their internal IDs, 
 * see [SuiteScript Supported Records](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_N3170023.html).
 * To attach a file from the file cabinet to a record, set type to file.
 * 
 * @param id The internalId of the record to attach.
 * 
 * @param type2 The record ID for the type of record that is receiving the
 * attachment.
 * 
 * @param id2 The internalId of the record that is receiving the attachment.
 * 
 * @param attributes Name/value pairs containing attributes for the attachment.
 * Some examples:
 * - contact->company record: role (the contact role id used for attaching
 * contact to customer/vendor/partner)
 * - customrecord*->parent record: field (the custom field used to link child
 * custom record to parent record)
 * 
 * @since 2008.1
 */
declare const nlapiAttachRecord: (
    type: string,
    id: number,
    type2: string,
    id2: number,
    attributes?: any
) => void;

/**
 * Cancels any uncommited changes to the current line of a sublist
 * 
 * @param type The sublist internal ID 
 * (for example, use price as the ID for the Pricing sublist).
 * See [Using the SuiteScript Records Browser](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html)
 * for sublists that support SuiteScript, sublist internal IDs, and sublist 
 * field IDs.
 */
declare const nlapiCancelLineItem: (type: string) => void;

/**
 * Saves/commits the changes to the current line in a sublist. 
 * This is the equivalent of clicking Done for a line item in the UI.
 * 
 * @param type The sublist internal ID (for example, use price as the ID for
 * the Pricing sublist).
 * See [Using the SuiteScript Records Browser](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html)
 * for sublists that support SuiteScript, sublist internal IDs, and sublist
 * field IDs.
 */
declare const nlapiCommitLineItem: (type: string) => void;

declare const nlapiCopyRecord: (type, id, initializeValues) => nlobjRecord;

declare const nlapiCreateAssistant: (title, hideHeader) => nlobjAssistant;

/*
   -----------------------------------------------------------------------------

                                OBJECT INTERFACES

   -----------------------------------------------------------------------------
*/

/**
 * Primary object used to encapsulate a NetSuite record.
 * 
 * SuiteScript supports working with standard NetSuite records and with
 * instances of custom record types.
 * Supported standard record types are described in the SuiteScript Records 
 * Browser.
 * For help working with an instance of a custom record type, see Custom Record.
 */
declare interface nlobjRecord {

    /**
     * Use this method to commit the current line in a sublist.
     * 
     * @param group The sublist internal ID
     * (for example, use addressbook as the ID for the Address sublist).
     * See [Using the SuiteScript Records Browser](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html)
     * for sublists that support SuiteScript, sublist internal IDs, and 
     * sublist field IDs.
     * 
     * @param ignoreRecalc If set to true, the total is not recalculated upon 
     * execution. Use this parameter if you are editing multiple line items on 
     * the same sublist and you need to improve performance. Do not use this 
     * option on the last commit of the sublist; the last commitLineItem call 
     * must recalculate the total. An error is thrown upon record submit if you 
     * do not recalculate the total on the last commitLineItem of the sublist. 
     * This parameter is only supported with server-side scripts.
     * 
     * @since 2009.2
     */
    commitLineItem(group: string, ignoreRecalc?: boolean): void;

    /**
     * Returns a nlobjSubrecord object. Use this API to create a subrecord from 
     * a **sublist field** on the parent record.
     * 
     * See [Working with Subrecords](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N2940215.html)
     * in SuiteScript for general information on working with subrecords in 
     * NetSuite.
     * 
     * @param sublist The sublist internal ID on the parent record
     * (for example, use item as the ID for the Items sublist).
     * 
     * @param fldname The internal ID of the “subrecord field” on the sublist 
     * of the parent record (for example, inventorydetail as the ID for the 
     * Inventory Details sublist field).
     * 
     * @since 2011.2
     */
    createCurrentLineItemSubrecord(
        sublist: string,
        fldname: string
    ): nlobjSubrecord;

    /**
     * Returns a nlobjSubrecord object. Use this API to create a subrecord from 
     * a **body field** on the parent record.
     * 
     * See [Working with Subrecords](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N2940215.html)
     * in SuiteScript for general information on working with subrecords in
     * NetSuite.     
     * 
     * @param fldname The internal ID of the “subrecord field” on the body of 
     * the parent record (for example, inventorydetail as the ID for the 
     * Inventory Details body field).
     * 
     * @since 2011.2
     */
    createSubrecord(fldname: string): nlobjSubrecord;

    /**
     * 
     * Returns a nlobjSubrecord object. Use this API to edit a subrecord from a 
     * **sublist** field on the parent record.
     * 
     * See [Working with Subrecords](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N2940215.html)
     * in SuiteScript for general information on working with subrecords in 
     * NetSuite.
     * 
     * @param sublist The sublist internal ID on the parent record (for example, use item as the ID for the Items sublist).
     * 
     * @param fldname The internal ID of the “subrecord field” on the body of 
     * the parent record (for example, inventorydetail as the ID for the 
     * Inventory Details body field).
     * 
     * @since 2011.2
     */
    editCurrentLineItemSubrecord(
        sublist: string,
        fldname: string
    ): nlobjSubrecord;

    /**
     * Returns a nlobjSubrecord object. Use this API to edit a subrecord from a 
     * **body** field on the parent record.
     * 
     * See [Working with Subrecords](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N2940215.html)
     * in SuiteScript for general information on working with subrecords in 
     * NetSuite.
     * 
     * @param fldname The internal ID of the “subrecord field” on the body of 
     * the parent record (for example, inventorydetail as the ID for the 
     * Inventory Details body field).
     * 
     * @since 2011.2
     */
    editSubrecord(fldname: string): nlobjSubrecord;

    /**
     * Use this method to return the line number of a particular price in a 
     * specific column. If the value is present on multiple lines, it will 
     * return the line item of the **first** line that contains the value.
     *
     * Use this API on a matrix sublists only.
     * 
     * @param group The sublist internal ID. In the NetSuite Help Center,
     * see [Pricing Sublist Internal IDs](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1502207768.html#bridgehead_N3219953)
     * to determine the correct internal ID of your pricing list.
     * 
     * @param fldnam The internal ID of the matrix field
     * 
     * @param column The column number for this field. Column numbers start at 
     * 1, not 0.
     * 
     * @param val The value of the field
     * 
     * @returns The line number (as an integer) of a specified matrix field
     * 
     * @since 2009.2
     */
    findLineItemMatrixValue(
        group: string,
        fldnam: string,
        column: number,
        val: string
    ): number;

    /**
     * 
     * Use this API to return the line number for the first occurrence of a 
     * field value in a sublist column. This API can be used on any sublist type
     *  that supports SuiteScript (editor, inline editor, and list sublists).
     * 
     * @param group The sublist internal ID. In the NetSuite Help Center, 
     * see [Pricing Sublist Internal IDs](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1502207768.html#bridgehead_N3219953)
     * to determine the correct internal ID of your pricing list.
     * 
     * @param fldnam The internal ID of the matrix field
     * 
     * @param value The value of the field
     * 
     * @returns The line number (as an integer) of a specified matrix field
     * 
     * @since 2009.2
     */
    findLineItemValue(group, fldnam, value): number;

    /**
     * Returns a normal keyed array of all the fields on a record. Note that the
     * number of fields returned will differ when you call getAllFields() on 
     * the edit of a record vs. on the xedit of a record. For details,
     * see these topics:
     * - [Inline Editing and nlapiGetNewRecord()](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N2957883.html)
     * - [Inline Editing and nlapiGetOldRecord()](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N2958027.html)
     * - [What's the Difference Between xedit and edit User Event Types?](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N2954592.html)
     * 
     * @returns String[] of all field names on the record
     * 
     * @since 2008.1
     */
    getAllFields(): string[];

    /**
     * Returns an array of all the field names of a sublist on this record
     * 
     * @param group The sublist internal ID. In the NetSuite Help Center,
     * see [Pricing Sublist Internal IDs](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1502207768.html#bridgehead_N3219953)
     * to determine the correct internal ID of your pricing list.
     * 
     * @returns String[] of sublist field names
     * 
     * @since 2008.2
     */
    getAllLineItemFields(group): string[];

    /**
     * Returns the value of a datetime field on the currently selected line of a
     * sublist. If timeZone is passed in, the datetime value is converted to 
     * that time zone and then returned. If timeZone is not passed in, the 
     * datetime value is returned in the default time zone.
     * 
     * @param type The internal sublist ID
     * 
     * @param fieldId The internal field ID. This field ID must point to a 
     * datetime formatted field.
     * 
     * @param timeZone If a string is passed in, it must match one of the Olson 
     * Values listed in the 
     * [Olson Values](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_3727261949.html) 
     * table (values are case-insensitive). If an integer is passed in, it must 
     * match one of the Key values listed in the 
     * [Olson Values](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_3727261949.html) 
     * table. If this argument is not supplied, the time zone will default to 
     * the time zone set in user preferences.
     * 
     * @returns The string value of a datetime field on the currently selected 
     * line.
     * 
     * @throws SSS_INVALID_ARG_TYPE
     * 
     * @since 2013.2
     */
    getCurrentLineItemDateTimeValue(
        type: string,
        fieldId: string,
        timeZone: string | number
    ): string;

    /**
     * Use this API to get the value of the currently selected matrix field. 
     * This API should be used on matrix sublists only.
     * 
     * @param group The sublist internal ID. In the NetSuite Help Center,
     * see [Pricing Sublist Internal IDs](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1502207768.html#bridgehead_N3219953)
     * to determine the correct internal ID of your pricing list.
     * 
     * @param fldnam The internal ID of the matrix field being set.
     * 
     * @param column The column number for this field. Column numbers start at 
     * 1, not 0.
     * 
     * @returns The string value of a field on the currently selected line in a 
     * matrix sublist. Returns null if the field does not exist.
     * 
     * @since 2009.2
     */
    getCurrentLineItemMatrixValue(
        group: string,
        fldnam: string,
        column: number
    ): string | null;

    /**
     * Returns the value of a sublist field on the currently selected line
     * 
     * @param type The sublist internal ID 
     * (for example, use addressbook as the ID for the Address sublist). 
     * See [Using the SuiteScript Records Browser](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html)
     * for sublists that support SuiteScript, sublist internal IDs, and sublist
     * field IDs.
     * 
     * @param fldnam The name of the field being set
     * 
     * @returns The string value of a field on the currently selected line. 
     * Returns null if field does not exist.
     */
    getCurrentLineItemValue(type: string, fldnam: string): string | null;

    /**
     * Returns the values of a multiselect sublist field on the currently 
     * selected line. One example of a multiselect sublist field is the Serial 
     * Numbers field on the Items sublist.
     *
     * This function is not supported in client SuiteScript. It is meant to be 
     * used in user event scripts.
     * 
     * @param type The sublist internal ID 
     * (for example, use addressbook as the ID for the Address sublist). 
     * See [Using the SuiteScript Records Browser](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html)
     * for sublists that support SuiteScript, sublist internal IDs, and sublist 
     * field IDs.
     * 
     * @param fldnam The name of the multiselect fieldThe name of the 
     * multiselect field
     */
    getCurrentLineItemValues(type: string, fldnam: string): string[];

    /**
     * Returns the value of a datetime field. If timeZone is passed in, the 
     * datetime value is converted to that time zone and then returned. If 
     * timeZone is not passed in, the datetime value is returned in the default 
     * time zone.
     * 
     * @param fieldId The internal field ID. This field ID must point to a 
     * datetime formatted field.
     * 
     * @param timeZone If a string is passed in,
     * it must match one of the Olson Values listed in the 
     * [Olson Values](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_3727261949.html)
     * table (values are case-insensitive). If an integer is passed in, it must 
     * match one of the Key values listed in the
     * [Olson Values](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_3727261949.html)
     * table. If this argument is not supplied, the time zone will default to 
     * the time zone set in user preferences.
     * 
     * @throws SSS_INVALID_ARG_TYPE
     * 
     * @since 2013.2
     */
    getDateTimeValue(fieldId: string, timeZone: string | number): string;

    /**
     * Returns field metadata for a field. This method is only supported with
     * server-side scripts.
     * 
     * @param fldnam The internal ID of the field
     * 
     * @returns The 
     * [nlobjField](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3140379.html) 
     * object
     * 
     * @since 2009.1
     */
    getField(fldnam: string): nlobjField;

    /**
     * Returns the UI display value for a select field. This method is only 
     * supported with server-side scripts. This method is supported on select 
     * fields only.
     * 
     * @param name The internal ID of the field
     * 
     * @returns String UI display value corresponding to the current selection 
     * for a select field. Returns null if field does not exist on the record or
     *  if the field is restricted.
     * 
     * @since 2009.1
     */
    getFieldText(name: string): string | null;

    /**
     * Returns the UI display values for a multi-select field. This method is 
     * only supported with server-side scripts. This method is supported on 
     * multi-select fields only.
     * 
     * @param name The internal ID of the multiselect field
     * 
     * @returns String[] - Returns the selected text values of a multi-select 
     * field
     * 
     * @since 2009.1
     */
    getFieldTexts(name: string): string[];

    /**
     * Returns the value (internal ID) of a field.
     *
     * Note that NetSuite recommends you read the topic 
     * [Getting Field Values in SuiteScript](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N2945065.html#bridgehead_N2945106), 
     * which addresses the rare instances in which the value returned by this 
     * API is inconsistent.
     * 
     * @param name The internal ID of the field whose value is being returned.
     * 
     * @returns The internal ID (string) value for the field
     */
    getFieldValue(name: string): string;

    /**
     * Returns the value (field ID) or values (array of field IDs) of a 
     * multi-select field.
     * 
     * @param name The name of the field whose value is being returned
     * 
     * @returns return logic:
     * - If there is only one value selected in the multi-select field, 
     * this method returns the field ID as a string.
     * - If there are multiple values selected in the multi-select field, 
     * this method returns a string array of field IDs.
     * - If the field is not on the record, this method returns null.
     */
    getFieldValues(name: string): string | string[] | null;

    /**
     * Use this method to get the internal ID of a record or NULL for new 
     * records.
     * 
     * @returns Integer value of the record ID
     */
    getId(): number;

    /**
     * Returns the number of lines on a sublist
     * 
     * @param group The sublist internal ID. In the NetSuite Help Center,
     * see [Pricing Sublist Internal IDs](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1502207768.html#bridgehead_N3219953)
     * to determine the correct internal ID of your pricing list.
     * 
     * @returns The integer value of the number of line items on a sublist
     */
    getLineItemCount(group: string): number;


    /**
     * Returns the value of a datetime field on a sublist. If timeZone is passed
     *  in, the datetime value is converted to that time zone and then returned.
     *  If timeZone is not passed in, the datetime value is returned in the 
     * default time zone.
     * 
     * @param type The internal sublist ID
     * 
     * @param fieldId The internal field ID. The field ID passed in must point 
     * to a datetime formatted field.
     * 
     * @param lineNum The line number for this field. Note the first line number
     *  on a sublist is 1 (not 0).
     * 
     * @param timeZone If a string is passed in, it must match one of the 
     * Olson Values listed in the 
     * [Olson Values](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_3727261949.html)
     * table 
     * (values are case-insensitive). If an integer is passed in, it must match
     * one of the Key values listed in the 
     * [Olson Values](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_3727261949.html)
     *  table.
     * 
     * @throws SSS_INVALID_ARG_TYPE
     * 
     * @since 2013.2
     */
    getLineItemDateTimeValue(
        type: string,
        fieldId: string,
        lineNum: number,
        timeZone: string | number
    ): string;

    /**
     * Returns field metadata for a line item (sublist) field. This method is 
     * only supported with server-side scripts.
     * 
     * @param group The sublist internal ID. In the NetSuite Help Center,
     * see [Pricing Sublist Internal IDs](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1502207768.html#bridgehead_N3219953)
     * to determine the correct internal ID of your pricing list.
     * 
     * @param fldnam The internal ID of the line item field
     * 
     * @param linenum The line number this field is on. Note the first line 
     * number on a sublist is 1 (not 0). Only settable for sublists of type list.
     * 
     * @since 2009.1
     */
    getLineItemField(
        group: string,
        fldnam: string,
        linenum: number
    ): nlobjField;

    /**
     * Use this API to obtain metadata for a field that appears in a matrix
     * sublist.
     * 
     * @param group The sublist internal ID. In the NetSuite Help Center,
     * see [Pricing Sublist Internal IDs](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1502207768.html#bridgehead_N3219953)
     * to determine the correct internal ID of your pricing list.
     * 
     * @param fldnam The internal ID of the field (line) whose value you want
     * returned.
     * 
     * @param linenum The line number for this field. Note the first line
     * number on a sublist is **1** (not 0).
     * 
     * @param column The column number for this field. Column numbers start
     * at 1, not 0.
     * 
     * @returns An nlobjField object representing this sublist field. Returns
     * null if the field you have specified does not exist.
     * 
     * @since 2009.2
     */
    getLineItemMatrixField(
        group: string,
        fldnam: string,
        linenum: number,
        column: number
    ): nlobjField | null;

    /**
     * Use this API to get the value of a matrix field that appears on a
     * specific line in a specific column. This API can be used only in the
     * context of a matrix sublist.
     * 
     * @param group The sublist internal ID. In the NetSuite Help Center,
     * see [Pricing Sublist Internal IDs](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1502207768.html#bridgehead_N3219953)
     * to determine the correct internal ID of your pricing list.
     * 
     * @param fldnam The internal ID of the field (line) whose value you want
     * returned.
     * 
     * @param linenum The line number for this field. Note the first line
     * number on a sublist is **1** (not 0).
     * 
     * @param column The column number for this field. Column numbers start
     * at 1, not 0.
     * 
     * @returns The string value of the matrix field
     * 
     * @since 2009.2
     */
    getLineItemMatrixValue(
        group: string,
        fldnam: string,
        lineum: null,
        column: number
    ): string;

    /**
     * Returns the display name of a select field 
     * (based on its current selection) in a sublist. This method is only 
     * supported with server-side scripts.
     * 
     * @param group The sublist internal ID (for example, use addressbook as 
     * the ID for the Address sublist). See Using the SuiteScript Records 
     * Browser for sublists that support SuiteScript, sublist internal IDs, and
     * sublist field IDs.
     * 
     * @param fldnam The name of the field/line item being set
     * 
     * @param linenum  The line number for this field. Note the first line 
     * number on a sublist is 1 (not 0).
     * 
     * @returns String - The string UI display value corresponding to the 
     * current selection for a line item select field. Returns null if 
     * field does not exist on the record or the field is restricted.
     * 
     * @since 2009.1
     */
    getLineItemText(
        group: string,
        fldnam: string,
        linenum: number
    ): string | null;


    /**
     * Returns the value of a sublist line item field.
     * 
     * Note that NetSuite recommends you read the topic 
     * [Getting Field Values in SuiteScript](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N2945065.html#bridgehead_N2945106),
     * which addresses the rare instances in which the value returned by this 
     * API is inconsistent.
     * 
     * @param group The sublist internal ID (for example, use addressbook as the
     * ID for the Address sublist). 
     * See [Using the SuiteScript Records Browser](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html)
     * for sublists that support SuiteScript, sublist internal IDs, and sublist
     * field IDs.
     * 
     * @param name The name of the sublist field whose value is being returned
     * 
     * @param linenum The line number for this field. Note the first line number
     * on a sublist is **1** (not 0).
     * 
     * @returns The string value of the sublist field name
     * 
     * @since 2008.1
     */
    getLineItemValue(group: string, name: string, linenum: number): string;


    /**
     * Returns the values of a multiselect sublist field on a selected line. One
     *  example of a multiselect sublist field is the Serial Numbers field on 
     * the Items sublist.
     * 
     * This function is not supported in client SuiteScript. It is meant to be 
     * used in user event scripts.
     * 
     * @param type The sublist internal ID (for example, use addressbook as the 
     * ID for the Address sublist). 
     * See [Using the SuiteScript Records Browser](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html) 
     * for sublists that support SuiteScript, sublist internal IDs, and sublist 
     * field IDs.
     * 
     * @param fldnam The internal ID of the multiselect field
     * 
     * @param linenum The line number for this field. Note the first line number
     *  on a sublist is 1 (not 0).
     * 
     * @returns An array of string values for the multiselect sublist field
     * 
     * @since 2012.1
     */
    getLineItemValues(type: string, fldnam: string, linenum: number): string[];

    /**
     * Use this API in a matrix sublist to get the number of columns for a 
     * specific matrix field.
     * 
     * @param group The sublist internal ID (for example, use addressbook as the
     * ID for the Address sublist). 
     * See [Using the SuiteScript Records Browser](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html)
     * for sublists that support SuiteScript, sublist internal IDs, and sublist
     * field IDs.
     * 
     * @param fldnam The field internal ID of the matrix field.
     * 
     * @returns The integer value for the number of columns of a specified 
     * matrix field
     * 
     * @since 2009.2
     */
    getMatrixCount(group: string, fldnam: string): number;

    /**
     * Use this API to get field metadata for a matrix “header” field in a 
     * matrix sublist. This method is only supported with server-side scripts.
     * 
     * @param group The sublist internal ID. In the NetSuite Help Center, see 
     * [Pricing Sublist Internal IDs](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1502207768.html#bridgehead_N3219953)
     * to determine the correct internal ID of your pricing list.
     * 
     * @param fldname The internal ID of the matrix header field.
     * 
     * @param column The column number for this field. Column numbers start at 1
     * (not 0).
     * 
     * @since 2009.2
     */
    getMatrixField(group: string, fldname: string, column: number): nlobjField;

    /**
     * Use this API to get the value of a matrix “header” field in a matrix 
     * sublist.
     * @param group The sublist internal ID. In the NetSuite Help Center, see 
     * [Pricing Sublist Internal IDs](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1502207768.html#bridgehead_N3219953)
     * to determine the correct internal ID of your pricing list.
     * @param fldnam 
     * 
     * @param column The column number for this field. Column numbers start at 1
     * (not 0).
     * 
     * @returns The string value of a matrix header field
     * 
     * @since 2009.2
     */
    getMatrixValue(group: string, fldnam: string, column: number): string;

    /**
     * Returns the record type (for example assembly unbuild would be returned 
     * for the Assembly Unbuild record type; salesorder would be returned for 
     * the Sales Order record type).
     * 
     * @returns The string value of the record name internal ID
     */
    getRecordType(): string;

    /**
     * Inserts a new line into a sublist. This function is only supported for 
     * edit sublists (inlineeditor, editor). Note, however, this API will work 
     * on list sublists that have been added via the UI object nlobjSubList
     * 
     * @param group The sublist internal ID (for example, use addressbook as the
     * ID for the Address sublist).
     * See [Using the SuiteScript Records Browser](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html)
     * for sublists that support SuiteScript, sublist internal IDs, and sublist
     * field IDs.
     * 
     * @param linenum Line index at which to insert the line. Note that in 
     * sublists, the first line number is 1 (not 0). If the number is greater 
     * than the number of lines on the sublist, an error is returned.
     * 
     * @param ignoreRecalc If set to true, the total is not recalculated upon
     * execution. Use this parameter if you are inserting multiple line items on
     * the same sublist and you need to improve performance. Do not use this
     * option on the last line item insert of the sublist; the last
     * insertLineItem call must recalculate the total. An error is thrown upon
     * record submit if you do not recalculate the total on the last
     * insertLineItem of the sublist. This parameter is only supported with
     * server-side scripts.
     */
    insertLineItem(
        group: string,
        linenum: number,
        ignoreRecalc?: boolean
    ): void;

    /**
     * Use this method to remove an existing line from a sublist.
     * 
     * @param group The sublist internal ID (for example, use addressbook as the
     * ID for the Address sublist).
     * See [Using the SuiteScript Records Browser](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html)
     * for sublists that support SuiteScript, sublist internal IDs, and sublist
     * field IDs.
     * 
     * @param linenum Line index at which to insert the line. Note that in 
     * sublists, the first line number is 1 (not 0). If the number is greater 
     * than the number of lines on the sublist, an error is returned.
     * 
     * @param ignoreRecalc If set to true, the total is not recalculated upon
     * execution. Use this parameter if you are inserting multiple line items on
     * the same sublist and you need to improve performance. Do not use this
     * option on the last line item insert of the sublist; the last
     * insertLineItem call must recalculate the total. An error is thrown upon
     * record submit if you do not recalculate the total on the last
     * insertLineItem of the sublist. This parameter is only supported with
     * server-side scripts. 
     * 
     * @since 2009.2
     */
    removeLineItem(
        group: string,
        linenum: number,
        ignoreRecalc?: boolean
    ): void;

    /**
     * Returns a nlobjSubrecord object. Use this API to remove a subrecord from 
     * a sublist field on the parent record.
     * 
     * See [Working with Subrecords in SuiteScript](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N2940215.html)
     * for general information on working with subrecords in NetSuite.
     * 
     * @param sublist The sublist internal ID on the parent record (for example,
     * use item as the ID for the Items sublist).
     * 
     * @param fldname The internal ID of the “subrecord field” on the sublist of
     * the parent record (for example, inventorydetail as the ID for the 
     * Inventory Details sublist field).
     */
    removeCurrentLineItemSubrecord(sublist: string, fldname: string): void;

    /**
     * Returns a nlobjSubrecord object. Use this API to remove a subrecord from 
     * a body field on the parent record.
     * 
     * See [Working with Subrecords in SuiteScript](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N2940215.html)
     * for general information on working with subrecords in NetSuite.
     * 
     * @param fldname The internal ID of the “subrecord field” on the body of
     * the parent record (for example, inventorydetail as the ID for the
     * Inventory Details body field).
     * 
     * @since 2011.2
     */
    removeSubrecord(fldname: string): void;

    /**
     * Use this method to select an existing line in a sublist.
     * 
     * @param group The sublist internal ID (for example, use addressbook as the
     * ID for the Address sublist). 
     * See [Using the SuiteScript Records Browser](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html)
     * for sublists that support SuiteScript, sublist internal IDs, and sublist
     * field IDs.
     * 
     * @param linenum The line number for this field. Note the first line number
     * on a sublist is 1 (not 0).
     * 
     * @since 2009.2
     */
    selectLineItem(group: string, linenum: number): void;

    /**
     * Use this method to insert and select a new line in a sublist.
     * 
     * @param group The sublist internal ID (for example, use addressbook as the
     * ID for the Address sublist). 
     * See [Using the SuiteScript Records Browser](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html) 
     * for sublists that support SuiteScript, sublist internal IDs, and sublist 
     * field IDs.
     * 
     * @since 2009.2
     */
    selectNewLineItem(group: string): void;

    /**
     * Sets the value of a datetime field on the currently selected line of a 
     * sublist. If timeZone is passed in, the datetime value is converted to 
     * that time zone and then set. If timeZone is not passed in, the datetime
     * value is set in the default time zone.
     * 
     * @param type The internal sublist ID
     * 
     * @param fieldId The internal field ID. The field ID passed in must point 
     * to a datetime formatted field.
     * 
     * @param dateTime The date and time in format mm/dd/yyyy hh:mm:ss am|pm 
     * (for example, ‘09/25/2013 06:00:01 am’).
     * 
     * @param timeZone If a string is passed in, it must match one of the Olson 
     * Values listed in the
     * [Olson Values](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_3727261949.html)
     * table (values are case-insensitive). If an integer is passed in, it must
     * match one of the Key values listed in the 
     * [Olson Values](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_3727261949.html)
     * table.
     * 
     * @throws SSS_INVALID_ARG_TYPE
     * 
     * @since 2013.2
     */
    setCurrentLineItemDateTimeValue(
        type: string,
        fieldId: string,
        dateTime: string,
        timeZone?: string | number
    ): void;

    /**
     * Use this API to set the value of a matrix sublist field. Also note that 
     * it should be used on matrix sublists only.
     * 
     * @param group The sublist internal ID. In the NetSuite Help Center,
     * see [Pricing Sublist Internal IDs](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1502207768.html#bridgehead_N3219953)
     * to determine the correct internal ID of your pricing list.
     * 
     * @param fldnam The internal ID of the matrix field.
     * 
     * @param column The column number for this field. Column numbers start at 1
     * (not 0).
     * 
     * @param value The value the field is being set to.
     * 
     * @since 2009.2
     */
    setCurrentLineItemMatrixValue(
        group: string,
        fldnam: string,
        column: number,
        value: string | number
    ): void;

    /**
     * Use this method to set the value of a sublist line item field.
     * 
     * @param group The sublist internal ID (for example, use addressbook as 
     * the ID for the Address sublist).
     * See [Using the SuiteScript Records Browser](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html)
     * for sublists that support SuiteScript, sublist internal IDs, and sublist 
     * field IDs.
     * 
     * @param name The name of the field being set
     * 
     * @param value The value the field is being set to.
     * 
     * @since 2009.2
     */
    setCurrentLineItemValue(group: string, name: string, value: string): void;

    /**
     * Sets the value of a datetime field. If timeZone is passed in, the 
     * datetime value is converted to that time zone and then set. If timeZone 
     * is not passed in, the datetime value is set in the default time zone.
     * 
     * @param fieldId The internal field ID. The field ID passed in must point 
     * to a datetime formatted field.
     * 
     * @param dateTime The date and time in format mm/dd/yyyy hh:mm:ss am|pm 
     * (for example, ‘09/25/2013 06:00:01 am’).
     * 
     * @param timeZone If a string is passed in, it must match one of the Olson
     * Values listed in the 
     * [Olson Values](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_3727261949.html)
     * table (values are case-insensitive). If an integer is passed in, it must
     * match one of the Key values listed in the
     * [Olson Values](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_3727261949.html)
     * table.
     * 
     * @throws SSS_INVALID_ARG_TYPE
     * 
     * @since 2013.2
     */
    setDateTimeValue(
        fieldId: string,
        dateTime: string,
        timeZone?: number | string
    ): void;

    /**
     * Sets the value of a select field using its corresponding display value.
     * This method is only supported with server-side scripts.
     * 
     * @param name The internal ID of the field being set
     * 
     * @param text The display value corresponding to the value the field is 
     * being set to
     * 
     * @since 2009.1
     */
    setFieldText(name: string, text: string): void;

    /**
     * Sets the values for a multiselect field from their display values. This
     * method is only supported with server-side scripts.
     * 
     * @param name The internal ID of the field being set
     * 
     * @param text The display values corresponding to the values the field is 
     * being set to
     * 
     * @since 2009.1
     */
    setFieldTexts(name: string, text: string[]): void;

    /**
     * Sets the value of a field
     * @param name The name of the field being set
     * @param value The value the field is being set to
     */
    setFieldValue(name: string, value: string): void;

    /**
     * Sets the value of a multi-select field
     * 
     * @param name The name of the field being set
     * 
     * @param value String array containing field values
     */
    setFieldValues(name: string, value: string[]): void;

    /**
     * Sets the value of a datetime field on a sublist. If timeZone is passed 
     * in, the datetime value is converted to that time zone and then set. If 
     * timeZone is not passed in, the datetime value is set in the default time 
     * zone.
     * 
     * @param type The internal sublist ID
     * 
     * @param fieldId The internal field ID. The field ID passed in must point 
     * to a datetime formatted field.
     * 
     * @param lineNum The line number for this field. Note the first line number
     * on a sublist is 1 (not 0).
     * 
     * @param dateTime The date and time in format mm/dd/yyyy hh:mm:ss am|pm 
     * (for example, ‘09/25/2013 06:00:01 am’).
     * 
     * @param timeZone If a string is passed in, it must match one of the 
     * Olson Values listed in the
     * [Olson Values](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_3727261949.html)
     * table (values are case-insensitive). If an integer is passed in, it must
     * match one of the Key values listed in the 
     * [Olson Values](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_3727261949.html)
     * table.
     * 
     * @throws SSS_INVALID_ARG_TYPE
     * 
     * @since 2013.2
     */
    setLineItemDateTimeValue(
        type: string,
        fieldId: string,
        lineNum: number,
        dateTime: string,
        timeZone?: string | number
    ): void;

    /**
     * Sets the value of a sublist line item.
     * 
     * @param group The sublist internal ID (for example, use addressbook as the
     * ID for the Address sublist). 
     * See [Using the SuiteScript Records Browser](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html)
     * for sublists that support SuiteScript, sublist internal IDs, and sublist
     * field IDs.
     * 
     * @param name The name of the field being set
     * 
     * @param linenum The line number for this field. Note the first line in a
     * sublist is 1 (not 0).
     * 
     * @param value The value the field is being set to. If a valid value is not
     * specified an error will be thrown.
     * 
     * @since 2008.1
     */
    setLineItemValue(
        group: string,
        name: string,
        linenum: number,
        value: string
    ): void;

    /**
     * This API is used to set a header field in a matrix sublist. Also note 
     * that this API should be used on matrix sublists only.
     * 
     * @param group The sublist internal ID. In the NetSuite Help Center, see 
     * Pricing Sublist Internal IDs to determine the correct internal ID of your
     * pricing list.
     * 
     * @param fldnam The name of the field being set.
     * 
     * @param column The column number for this field. Column numbers start at 1
     * (not 0).
     * 
     * @param value The value the field is being set to.
     * 
     * @since 2009.2
     */
    setMatrixValue(
        group: string,
        fldnam: string,
        column: number,
        value: string
    ): void;

    /**
     * Returns a nlobjSubrecord object. Use this API to view a subrecord from a 
     * sublist field on the parent record. Calling this API analogous to doing a
     * “get” on a subrecord, however, the nlobjSubrecord object returned is in 
     * read-only mode. Therefore, an error is thrown if you attempt to edit a 
     * subrecord returned by this API.
     * 
     * You can call this API when you want your script to read the 
     * [nlobjSubrecord](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3126577.html)
     * object of the current sublist line you are on.
     * 
     * See [Working with Subrecords in SuiteScript](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N2940215.html)
     * for general information on working with subrecords in NetSuite.
     * 
     * @param sublist The sublist internal ID on the parent record (for example,
     * use item as the ID for the Items sublist).
     * 
     * @param fldname The internal ID of the “subrecord field” on the sublist of
     * the parent record (for example, **inventorydetail** as the ID for the
     * Inventory Details sublist field).
     * 
     * @since 2011.2
     */
    viewCurrentLineItemSubrecord(
        sublist: string,
        fldname: string
    ): nlobjSubrecord;

    /**
     * Returns a nlobjSubrecord object. Use this API to view a subrecord from a 
     * sublist field on the parent record. Calling this API analogous to doing a
     *  “get” on a subrecord, however, the nlobjSubrecord object returned is in 
     * read-only mode. Therefore, an error is thrown if you attempt to edit a 
     * subrecord returned by this function.
     * 
     * You can call this API when you want to read the value of a line you are 
     * not currently on. For example, if you are editing line 2, you can call 
     * this API on line 1 to get the value of line 1.
     * 
     * See [Working with Subrecords in SuiteScript](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N2940215.html)
     * for general information on working with subrecords in NetSuite.
     * 
     * @param sublist The sublist internal ID on the parent record (for example,
     *  use item as the ID for the Items sublist).
     * 
     * @param fldname The internal ID of the “subrecord field” on the sublist of
     *  the parent record (for example, inventorydetail as the ID for the 
     * Inventory Details sublist field).
     * 
     * @param linenum The line number for the sublist field. Note the first line
     *  number on a sublist is 1 (not 0).
     * 
     * @since 2011.2
     */
    viewLineItemSubrecord(
        sublist: string,
        fldname: string,
        linenum: number
    ): nlobjSubrecord;

    /**
     * Returns a nlobjSubrecord object. Use this API to view a subrecord from a 
     * body field on the parent record. Calling this API analogous to doing a 
     * “get” on a subrecord, however, the nlobjSubrecord object returned is in 
     * read-only mode. Therefore, an error is thrown if you attempt to edit a 
     * subrecord returned by this function.
     * 
     * See [Working with Subrecords in SuiteScript](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N2940215.html)
     * for general information on working with subrecords in NetSuite.
     * @param fldname The internal ID of the “subrecord field” on the body of
     * the parent record (for example, inventorydetail as the ID for the
     * Inventory Details body field).
     * 
     * @since 2011.2
     */
    viewSubrecord(fldname: string): nlobjSubrecord;
}

/**
 * Primary object used to encapsulate a NetSuite subrecord. To create a 
 * subrecord, you must first create or load a parent record. You can then create
 *  or access a subrecord from a body field or from a sublist field on the 
 * parent record.
 * 
 * For general information on subrecords, 
 * see [Working with Subrecords in SuiteScript](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N2940215.html).
 * For a list of all APIs related to subrecords,
 * see [Subrecord APIs](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N2940215.html).
 */
declare interface nlobjSubrecord {
    /**
     * Use this method to cancel the current processing of the subrecord and 
     * revert subrecord data to the last committed change (submitted in the last
     *  commit() call).
     * 
     * Note that you will not be able to do any additional write or read 
     * operations on the subrecord instance after you have canceled it. You must
     * reload the subrecord from the parent to write any additional data to the
     * subrecord.
     * 
     * @since 2011.2
     */
    cancel(): void;

    /**
     * Use this method to commit the subrecord to the parent record.
     * See [Saving Subrecords Using SuiteScript](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N2941460.html)
     * for additional information on saving subrecords.
     * 
     * @since 2011.2
     */
    commit(): void;
}

/**
 * Primary object used to encapsulate a NetSuite field.
 * 
 * @link [to docs](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3140379.html)
 */
declare interface nlobjField {

    /**
     * Adds a select option to a SELECT field
     * 
     * @param value The internal ID of this select option
     * 
     * @param text The UI label for this option
     * 
     * @param selected If true, then this option is selected by default
     * 
     * @since 2008.2
     */
    addSelectOption(value: string, text: string, selected?: boolean): void;

    /**
     * Returns field UI label
     * 
     * @returns String value of the field's UI label
     * 
     * @since 2009.1
     */
    getLabel(): string;

    /**
     * Returns the field internal ID
     * 
     * @returns String value of a field's internal ID
     * 
     * @since 2009.1
     */
    getName(): string;

    /**
     * Use this API to obtain a list of available options on a select field. 
     * This API can be used on both standard and custom select fields. 
     * Only the first 1,000 available options will be returned by this API.
     *
     * This method can only be used in server contexts against a record object. 
     * Also note that a call to this method may return different results for the
     *  same field for different roles.
     *
     * If you attempt to get select options on a field that is not a select 
     * field, or if you reference a field that does not exist on the form, null 
     * is returned.
     * 
     * @param filter A search string to filter the select options that are 
     * returned. For example, if there are 50 select options available, and 10 
     * of the options contains 'John', e.g. “John Smith” or “Shauna Johnson”, 
     * only those 10 options will be returned.
     * 
     * @param filteroperator Supported operators are **contains** | **is** | 
     * **startswith**. If not specified, defaults to the **contains** operator.
     * 
     * @returns An array of 
     * [nlobjSelectOption](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3126295.html)
     * objects. These objects represent the key-value pairs representing a 
     * select option (for example: **87, Abe Simpson** ).
     * 
     * @since 2009.1
     */
    getSelectOptions(
        filter?: string,
        filteroperator?: string
    ): nlobjSelectOption[];

    /**
     * Returns the field type - for example, text, date, currency, select, 
     * checkbox, etc.
     * 
     * @returns String value of field's SuiteScript type
     * 
     * @since 2009.1
     */
    getType(): string;

    /**
     * Sets the alias used to set the value for this field. By default the alias
     *  is equal to the field's name. The method is only supported on scripted 
     * fields via the UI Object API.
     * 
     * @param alias The value used to override the alias
     * 
     * @since 2008.2
     */
    setAlias(alias: string): nlobjField;

    /**
     * Use this method to set the layout type for a field and optionally the 
     * break type. This method is only supported on scripted fields that have 
     * been created using the UI Object API.
     * 
     * @param breaktype The break type used to add a break in flow layout for 
     * this field. Available types are:
     * - startcol - This starts a new column (also disables automatic field 
     * balancing if set for any field)
     * - startrow - For outside fields, this places the field on a new row. The 
     * startrow breaktype 
     * is only used for fields with a layout type of outside. 
     * See [setLayoutType(type, breaktype)](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3140379.html#bridgehead_N3143169).
     * - none - (default)
     * 
     * @since 2009.2
     */
    setBreakType(breaktype: 'startcol' | 'startrow' | 'none'): nlobjField;

    /**
     * Sets the default value for this field. This method is only supported on 
     * scripted fields via the UI object API.
     * 
     * @param value The default value for this field. Note that if you pass an 
     * empty string, the field will default to a blank field in the UI.
     * 
     * @since 2008.2
     */
    setDefaultValue(value: string): nlobjField;

    /**
     * Sets the height and width for the field. Only supported on multi-selects,
     *  long text, rich text, and fields that get rendered as INPUT (type=text) 
     * fields. This API is not supported on list/record fields. This method is 
     * only supported on scripted fields via the UI object API.
     * 
     * @param width The width of the field (cols for textarea, characters for 
     * all others)
     * 
     * @param height The height of the field (rows for textarea and multiselect 
     * fields)
     * 
     * @since 2008.2
     */
    setDisplaySize(width: number, height: number): nlobjField;

    /**
     * Sets the display type for this field.
     *
     * Be aware that this method cannot be used in **client** scripts. 
     * In other words, if you use 
     * [nlapiGetField(fldnam)](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3039111.html#bridgehead_N3039511)
     * in a client script to return a 
     * field object that has been added to a form, you cannot use setDisplayType
     *  to set the field's display type. The nlobjField object returned from 
     * nlapiGetField(fldnam) is **read-only**.
     * 
     * @param type The display type for this field. 
     * 
     * Allowed display types:
     * - inline - This makes the field display as inline text
     * - hidden - This hides the field on the form.
     * - readonly - This disables the field but it is still selectable and 
     * scrollable (for textarea fields)
     * - entry - This makes the sublist field appear as a data entry input field
     *  (for non checkbox, select fields)
     * - disabled - This disables the field from user-changes
     * - normal - (default) This makes the field appear as a normal input field 
     * (for non-sublist fields)
     * 
     * @since 2008.2
     */
    setDisplayType(
        type: 'inline' | 'hidden' | 'readonly' | 'entry' | 'disabled' | 'normal'
    ): nlobjField;


    /**
     * Use this method to set help text for this field.
     * 
     * @param help Help text for the field. When the field label is clicked,
     * a field help popup will open to display the help text.
     * 
     * @param inline If not set, defaults to false. 
     * This means that field help will appear only in a field help popup box 
     * when the field label is clicked. 
     * If set to true, field help will display in a field help popup box, as 
     * well as inline below the field.
     * 
     * @since 2009.2
     */
    setHelpText(help: string, inline?: boolean): nlobjField;

    /**
     * Sets the UI label for this field. The method is available only on 
     * scripted fields via the UI object API.
     * 
     * @param label The UI label used for this field
     * 
     * @since 2008.2
     */
    setLabel(label: string): nlobjField;

    /**
     * Sets the display type for this field and optionally the break type. This 
     * method is only supported on scripted fields via the UI Object API.
     * 
     * @param type The layout type for this field. Use any of the following 
     * layout types:
     * 
     * - outside - This makes the field appear outside (above or below based on 
     * form default) the normal field layout area
     * - outsidebelow - This makes the field appear below the normal field 
     * layout area
     * - outsideabove - This makes the field appear above the normal field 
     * layout area
     * - startrow - This makes the field appear first in a horizontally aligned 
     * field group in normal field layout flow
     * - midrow - This makes the field appear in the middle of a horizonatally 
     * aligned field group in normal field layout flow
     * - endrow - This makes the field appear last in a horizonatally aligned 
     * field group in normal field layout flow
     * - normal - (default)
     * 
     * @param breaktype The layout break type. Use any of the following break 
     * types:
     * - startcol - This starts a new column (also disables automatic field 
     * balancing if set for any field)
     * - startrow - For outside fields, this places the field on a new row
     * - none - (default)
     * 
     * @since 2008.2
     */
    setLayoutType(
        type:
            'outside' | 'outsidebelow' | 'outsideabove' | 'startrow' |
            'midrow' | 'endrow' | 'normal',
        breaktype:
            'startcol' | 'startrow' | 'none'
    ): nlobjField;

    /**
     * Sets the text that gets displayed in lieu of the field value for URL 
     * fields.
     * 
     * @param text The displayed value (in lieu of URL)
     * 
     * @since 2008.2
     */
    setLinkText(text: string): nlobjField;

    /**
     * Sets the field to mandatory. The method is only supported on scripted 
     * fields via the UI Object API.
     * 
     * @param mandatory If true, then the field will be defined as mandatory
     * 
     * @since 2008.2
     */
    setMandatory(mandatory: boolean): nlobjField;

    /**
     * Sets the max length for this field (only valid for text, rich text, 
     * long text, and textarea fields). This method is only supported on 
     * scripted fields via the UI Object API.
     * 
     * @param maxlength The max length for this field
     * 
     * @since 2008.2
     */
    setMaxLength(maxlength: number): nlobjField;

    /**
     * Sets the number of empty field spaces before/above this field. 
     * This method is only supported on scripted fields via the UI Object API.
     * 
     * @param padding The number of empty vertical spaces (rows) before this field
     * 
     * @since 2008.2
     */
    setPadding(padding: string): nlobjField;

    /**
     * If **Rich Text Editing** is enabled, you can use this method to set the 
     * height of the rich text field only. You can set a separate height for the
     * text area using 
     * [setDisplaySize(width, height)](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3140379.html#bridgehead_N3141934).
     * When setting the height, the minimum value is 100 pixels and the maximum 
     * value is 500 pixels.
     * 
     * For information on enabling the Rich Text Editor, 
     * see [Setting Preferences for Appearance](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3140379.html#bridgehead_N3141934).
     * 
     * @param height The height of the field (pixels).
     * 
     * @since 2015.1
     */
    setRichTextHeight(height?: number): nlobjField;

    /**
     * If Rich Text Editing is enabled, you can use this method to set the width
     *  of the rich text field only. You can set a separate width of the text 
     * area using 
     * [setDisplaySize(width, height)](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3140379.html#bridgehead_N3141934). 
     * When setting the width, the minimum value is 250 pixels and the maximum 
     * value is 800 pixels.
     *
     * For information on enabling the Rich Text Editor, 
     * see [Setting Preferences for Appearance](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N479574.html)
     * 
     * @param width The width of the field (pixels).
     * 
     * @since 2015.1
     */
    setRichTextWidth(width?: number): nlobjField;
}

/**
 * Primary object used to encapsulate available select options for a select 
 * field. This object is returned after a call to `nlobjField.` 
 * [getSelectOptions(filter, filteroperator)](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3140379.html#bridgehead_N3141217).
 * The object contains a key, value pair that represents a select option, for 
 * example: 87, Abe Simpson
 * 
 * @link [to docs](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3126295.html)
 */
declare interface nlobjSelectOption {

    /**
     * Use this method to get the internal ID of a select option. For example, 
     * on a select field called **Colors**, a call to this method might return 
     * 1, 2, 3 (to represent the internal IDs for options that appear in a 
     * dropdown field as Red, White, Blue).
     * 
     * @returns The integer value of a select option, for example, 1, 2, 3.
     * 
     * @since 2009.2
     */
    getId(): number;

    /**
     * Use this method to get the UI display label of a select option. For 
     * example, on a select field called **Colors**, a call to this method might
     * return Red, White, Blue.
     * 
     * @returns The UI display label of a select option
     * 
     * @since 2009.2
     */
    getText(): string;
}

/**
 * Primary object used to encapsulate all properties of a scriptable multi-step 
 * NetSuite assistant. All data and state for an assistant is tracked
 * automatically throughout the user's session up until completion of the
 * assistant.
 * 
 * For examples showing how to build and run an assistant in your NetSuite
 * account,
 * see [Building a NetSuite Assistant with UI Objects](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_N3012526.html).
 */
declare interface nlobjAssistant {

    /**
     * Use this method to add a field to an assistant and return the field 
     * object.
     * 
     * @param name  The internal ID for this field
     * 
     * @param type The field type. Any of the following field types can be 
     * specified:
     * - text
     * - email
     * - radio - See [Working with Radio Buttons](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3144618.html#bridgehead_N3149879)
     * for details on this field type.
     * - label - This is a field type that has no values. In 
     * [Working with Radio Buttons](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3144618.html#bridgehead_N3149879),
     * see the first code sample that shows how to set this field type.
     * - phone
     * - date
     * - currency
     * - float
     * - integer
     * - checkbox
     * - select - Note that if you want to add your own (custom) options on a select field, you must set the source parameter to NULL. Then, when a value is specified, the value will populate the options from the source.
     * - url - See [Create a Form with a URL Field](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N2969820.html)
     * for an example how to use this type.
     * - timeofday
     * - textarea
     * - multiselect
     * - image
     * - inlinehtml
     * - password
     * - help
     * - percent
     * - longtext
     * - richtext
     * 
     * @param label The UI label for this field
     * 
     * @param source  The internalId or scriptId of the source list for this
     * field if it is a select (List/Record) field. In the NetSuite Help Center,
     *  see List/Record Type IDs for the internal IDs of all supported 
     * list/record types.
     * 
     * @param group If you are adding the field to a field group, specify the 
     * internal ID of the field group
     * 
     * @since 2009.2
     */
    addField(
        name: string,
        type:
            'text' | 'email' | 'radio' | 'label' | 'phone' | 'date' |
            'currency' | 'float' | 'integer' | 'checkbox' | 'select' | 'url' |
            'timeofday' | 'textarea' | 'multiselect' | 'image' |
            'inlinehtml' | 'password' | 'help' | 'percent' | 'longtext' |
            'richtext',
        label?: string,
        source?: string,
        group?: string
    ): nlobjField;

    /**
     * Use this method to add a field group to an assistant page. Note that when
     * a field group is added to an assistant, by default it is collapsible.
     * Also, by default, it will appear as uncollapsed when the page loads. If 
     * you want to change these behaviors, you will use the
     * [nlobjFieldGroup.setCollapsible(collapsible, hidden)](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3143883.html#bridgehead_N3144022)
     * method.
     * @param name The internal ID for the field group
     * @param label The UI label for the field group
     */
    addFieldGroup(name: string, label: string): nlobjFieldGroup;

    /**
     * Use this method to add a step to an assistant.
     * 
     * @param name The internal ID for this step (for example, 'entercontacts').
     * 
     * @param label The UI label for the step (for example, 'Enter Contacts'). 
     * By default, the step will appear vertically in the left panel of the 
     * assistant (see figure).
     * 
     * @since 2009.2
     */
    addStep(name: string, label: string): nlobjAssistantStep;

    /**
     * Use this method to add a sublist to an assistant page and return an
     * [nlobjSubList](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3161033.html)
     * object. Note that only inlineeditor sublists can be added to assistant
     * pages.
     * 
     * @param name The internal ID for the sublist
     * 
     * @param type The sublist type. Currently, only a value of **inlineeditor**
     * can be set.
     * 
     * @param label The UI label for the sublist
     * 
     * @since 2009.2
     */
    addSubList(name: string, type: string, label: string): nlobjSubList;

    getAllFields()

    getAllFieldGroups()

    getAllSteps()

    getAllSubLists()

    getCurrentStep()

    getField(name)

    getFieldGroup(name)

    getLastAction()

    getLastStep()

    getNextStep()

    getStep(name)

    getStepCount()

    getSubList(name)

    hasError()

    isFinished()

    sendRedirect(response)

    setCurrentStep(step)

    setError(html)

    setFieldValues(values)

    setFinished(html)

    setNumbered(hasStepNumber)

    setOrdered(ordered)

    setScript(script)

    setShortcut(show)

    setSplash(title, text1, text2)

    setTitle(title)
}

/**
 * Primary object used to encapsulate a field group on a custom NetSuite 
 * assistant page and on nlobjForm objects.
 * 
 * You can create an assistant by calling 
 * [nlapiCreateAssistant(title, hideHeader)](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3056572.html#bridgehead_N3056901), 
 * which returns a reference to the 
 * [nlobjAssistant](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3127246.html)
 * object. On the assistantobject, call addFieldGroup to instantiate a new
 * nlobjFieldGroup object.
 * 
 * To learn more about field groups, see
 * [Building a NetSuite Assistant](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_N3012526.html)
 * with UI Objects.
 */
declare interface nlobjFieldGroup {

    /**
     * Use this method to define whether a field group can be collapsed. You can
     * also use this method to define if the field group will display as
     * collapsed or expanded when the page first loads.
     * 
     * @param collapsible A value of true means that the field group can be
     * collapsed. A value of false means that the field group cannot be
     * collapsed - the field group displays as a static group that cannot be
     * opened or closed.
     * 
     * @param hidden If not set, defaults to false. This means that when the
     * page loads, the field group will not appear collapsed. Note: If you set 
     * the collapsible parameter to false (meaning the field group is not
     * collapsible), then any value you specify for hidden will be ignored.
     * 
     * @returns 2009.2
     */
    setCollapsible(collapsible: boolean, hidden?: boolean): nlobjFieldGroup;

    /**
     * Use this method to create a UI label for a field group.
     * 
     * @param label The UI label for the field group
     * 
     * @since 2009.2
     */
    setLabel(label: string): nlobjFieldGroup;

    /**
     * Use this method to conditionally show or hide the border of a field 
     * group. A field group border consists of the field group title and the 
     * gray line that frames the group by default.
     * 
     * @param show Set to true to show a field group border. Set to false to 
     * hide the border.
     * 
     * @since 2011.1
     */
    setShowBorder(show: boolean): void;

    /**
     * Use this method to determine how your field group is aligned. You can 
     * choose to align it into a single column or allow NetSuite to auto-align 
     * it.
     * 
     * @param column Set to true to place all fields in the field group into a 
     * single column. Set to false to allow NetSuite to auto-align your field 
     * group fields into one, two, or three columns, depending on the number of 
     * fields and the width of your screen.
     */
    setSingleColumn(column: boolean): void;
}

/**
 * Primary object used to encapulate a step within a custom NetSuite assistant.
 * 
 * For information on working with nlobjAssistantStep objects, as well as
 * information on building an assistant using other UI objects, see 
 * [Building a NetSuite Assistant with UI Objects](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_N3012526.html).
 */
declare interface nlobjAssistantStep {

    /**
     * Use this method to get all fields entered by the user during the step.
     * 
     * @returns String[] of all fields entered by the user during the step
     * 
     * @since - 2009.2
     */
    getAllFields(): string[];

    /**
     * Use this method to get all sublist fields entered by the user during this step.
     * 
     * @param group The sublist internal ID
     * 
     * @returns String[] of all sublist fields entered by the user during the 
     * step
     * 
     * @since 2009.2
     */
    getAllLineItemFields(group: string): string[];

    /**
     * Use this method to get all sublists entered by the user during this step.
     * 
     * @returns String[] of all sublists entered by the user during this step
     * 
     * @since 2009.2
     */
    getAllLineItems(): string[];

    /**
     * Use this method to get the value of a field entered by the user during 
     * this step.
     * 
     * @param name The internal ID of the field whose value is being returned
     * 
     * @returns The internal ID (string) value for the field
     * 
     * @since 2009.2
     */
    getFieldValue(name: string): string;

    /**
     * Use this method to get the selected values of a multi-select field as an
     * Array.
     * 
     * @param name The name of the multi-select field
     * 
     * @returns String[] of field IDs. Returns `null` if field is not on the
     * record. Note the values returned are **read-only**.
     * 
     * @since 2009.2
     */
    getFieldValues(name): string[] | null;

    /**
     * Use the method to get the number of lines previously entered by the user 
     * in this step.
     * 
     * @param group The sublist internal ID
     * 
     * @returns The integer value of the number of line items on a sublist. 
     * Note that -1 is returned if the sublist does not exist.
     * 
     * @since 2009.2
     */
    getLineItemCount(group: string): number;

    /**
     * Use this method to get the value of a line item (sublist) field entered 
     * by the user during this step.
     * 
     * @param group The sublist internal ID
     * 
     * @param name The name of the sublist field whose value is being returned
     * 
     * @param line The line number for this field. Note the first line number 
     * on a sublist is **1** (not 0).
     * 
     * @returns The string value of the sublist field
     * 
     * @since 2009.2
     */
    getLineItemValue(group: string, name: string, line: number): string;

    /**
     * Use this method to get a step number. The number returned represents 
     * where this step appears sequentially in the assistant.
     * 
     * @returns The index of this step in the assistant page (1-based)
     * 
     * @since 2009.2
     */
    getStepNumber(): number;


    /**
     * Use this method to set help text for an assistant step.
     * 
     * @param help The help text for the step
     * 
     * @since 2009.2
     */
    setHelpText(help: string):

        // the return was misspelled
        // as **nlobjAssistantSte**
        // and there was no doc link.
        // I am assuming that they
        // meant 
        // **nlobjAssistantStep**
        nlobjAssistantStep;

    /**
     * Use this method to set the label for an assistant step. Note that you can
     * also create a label for a step when the step is first added to the
     * assistant. Do this using nlobjAssistant
     * [.addStep(name, label)](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3127246.html#bridgehead_N3129563).
     * 
     * @param label The UI label for this step
     * 
     * @since 2009.2
     */
    setLabel(label: string): nlobjAssistantStep;
}

/**
 * Primary object used to encapsulate a NetSuite sublist. This object is 
 * **read-only** except for instances created via the UI Object API using
 * Suitelets or beforeLoad user event scripts.
 * 
 * To add a sublist, you must first create a custom form using
 * [nlapiCreateForm(title, hideNavbar)](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3056572.html#bridgehead_N3057076),
 * which returns an 
 * [nlobjForm](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3144618.html)
 * object.
 * 
 * After the form object is instantiated, you can add a new sublist to the form
 * using the nlobjForm
 * [.addSubList(name, type, label, tab)](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3144618.html#bridgehead_N3150667)
 * method, which returns a reference to nlobSublist.
 */
declare interface nlobjSubList {
    /**
     * Adds a button to a sublist
     * 
     * @param name The internal ID name of the button. Internal ID names must be
     * in lowercase and contain no spaces.
     * 
     * @param label The UI label for the button
     * 
     * @param script The onclick script function name
     * 
     * @since 2008.2
     */
    addButton(name?: string, label?: string, script?: string): nlobjButton;

    /**
     * Adds a field (column) to a sublist
     * 
     * @param name The internal ID name of the field. Internal ID names must be 
     * in lowercase and contain no spaces.
     * 
     * @param type The field type for this field. Use any of the following 
     * types:
     * - text
     * - email
     * - phone
     * - date
     * - datetimetz - This field type lets you combine date and time values in one field. For example, you may want a single field to contain date and time “timestamp” data. After a user enters a date/time value, the data is rendered in the user's preferred date and time format, as well as the user's time zone. Also note that time values are stored in NetSuite down to the second.
     * - currency
     * - float
     * - integer
     * - checkbox
     * - select
     * - url
     * - image - This field type is available **only** for fields appearing on list/staticlist sublists. You cannot specify an **image** field on a form.
     * - timeofday
     * - textarea
     * - percent
     * - radio - only supported for sublists of type list
     * @param label The UI label for this field
     * 
     * @param source The internalId or scriptId of the source list for this
     * field if it's a select (List/Record) field. In the NetSuite Help Center,
     * see [List/Record Type IDs](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3144618.html#bridgehead_N3148193)
     * for the internal IDs of all supported list/record types.
     * 
     * @since 2008.2
     */
    addField(
        name: string,
        type: string,
        label: string,
        source?: number | string
    ): nlobjField;

    /**
     * Adds a "Mark All" and an "Unmark All" button to a sublist. Only valid on
     * scriptable sublists of type **LIST**. Requires a check box column to
     * exist on the form, which will be automatically checked/unchecked
     * depending on what the end user does.
     * 
     * @since 2008.2
     */
    addMarkAllButtons(): void;

    /**
     * Adds a Refresh button to sublists of type `list` or `staticlist` to
     * auto-refresh the sublist if its contents are dynamic. In this case, the
     * sublist is refreshed without having to reload the contents of the entire
     * page.
     * 
     * @since 2009.1
     */
    addRefreshButton(): nlobjButton;

    /**
     * Returns the number of lines on a sublist
     * 
     * @return The integer value of the number of line items on a sublist
     */
    getLineItemCount(): number;

    /**
     * Returns string value of a sublist field. Note that you cannot set default
     * line item values when the line is not in edit mode.
     * 
     * @param group The sublist internal ID (for example, use addressbook as the
     * ID for the Address sublist). See
     * [Using the SuiteScript Records Browser](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html)
     * for sublists that support SuiteScript, sublist internal IDs, and sublist
     * field IDs.
     * 
     * @param fldnam The internal ID of the field (line item) whose value is
     * being returned
     * 
     * @param linenum The line number for this field. Note the first line number
     * on a sublist is 1 (not 0).
     */
    getLineItemValue(group: string, fldnam: string, linenum: number): string;

    /**
     * Designates a particular column as the totalling column, which is used to 
     * calculate and display a running total for the sublist
     * 
     * @param field The internal ID name of the field on this sublist used to 
     * calculate running total
     * 
     * @since 2010.1
     */
    setAmountField(field: string): void;

    /**
     * Sets the display style for this sublist. This method is only supported on
     * scripted or staticlist sublists via the UI Object API.
     * 
     * @param type The display type for this sublist. Use either of the
     * following two values:
     * - hidden
     * - normal - (default)
     * 
     * @since 2008.2
     */
    setDisplayType(type?: 'hidden' | 'normal'): void;

    /**
     * Adds inline help text to this sublist. This method is only supported on 
     * sublists via the UI Object API.
     * 
     * @param help Inline help text used for this sublist
     * 
     * @since 2008.2
     */
    setHelpText(help: string): void;

    /**
     * Sets the label for this sublist. This method is only supported on
     * sublists via the UI Object API.
     * 
     * @param label The UI label for this sublist
     * 
     * @since 2008.2
     */
    setLabel(label: string): void;

    /**
     * Sets the value of a cell in a sublist field.
     * 
     * @param name The internal ID name of the line item field being set
     * 
     * @param linenum The line number for this field. Note the first line number
     * on a sublist is 1 (not 0).
     * 
     * @param value The value the field is being set to
     * 
     * @since 2008.2
     */
    setLineItemValue(name: string, linenum: number, value: string): void;

    setLineItemValues(values: { string: string }[] | nlobjSearchResult[]): void;

    setUniqueField(name)
}

/**
 * Primary object used to encapsulate custom buttons. Note that custom buttons 
 * only appear in the UI when the record is in Edit mode. Custom buttons do not 
 * appear in View mode. Also note that in SuiteScript, buttons are typically 
 * added to a record or form in **beforeLoad** user event scripts.
 */
declare interface nlobjButton {

    /**
     * Disables the button. When using this API, the assumption is that you have
     * already defined the button's UI label when you created the button using
     * nlobjForm
     * [.addButton(name, label, script)](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3144618.html#bridgehead_N3147271).
     * The `setDisabled()` method grays-out the button's appearance in the UI.
     * 
     * @param disabled If set to true, the button will still appear on the form,
     * however, the button label will be grayed-out.
     * 
     * @since 2008.2
     */
    setDisabled(disabled: boolean): nlobjButton;

    /**
     * Sets the UI label for the button. When using this API, the assumption is 
     * that you have already defined the button's UI label when you created the
     * button using nlobjForm
     * [.addButton(name, label, script)](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3144618.html#bridgehead_N3147271).
     * You can set `setLabel()` to trigger based on the execution context. For
     * example, based on the user viewing a page, you can use `setLabel()` to
     * re-label a button's UI label so that the label is meaningful to that
     * particular user.
     * 
     * This API is supported on standard NetSuite buttons as well as on custom
     * buttons. For a list of standard buttons that support this API, see
     * [Button IDs](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_N3265696.html)
     * in the NetSuite Help Center.
     * 
     * @param label The UI label for the custom button
     * 
     * @since 2008.2
     */
    setLabel(label: string): nlobjButton;

    /**
     * Sets the button as hidden in the UI. This API is supported on custom
     * buttons and on some standard NetSuite buttons. For a list of standard
     * buttons that support this API, see 
     * [Button IDs](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_N3265696.html)
     * in the NetSuite Help Center.
     * 
     * @param visible Defaults to true if not set. If set to false,
     * the button will be hidden in the UI.
     * 
     * @since 2010.2
     */
    setVisible(visible?: boolean): nlobjButton;
}

/**
 * Primary object used to encapsulate a search result row. For information on
 * executing NetSuite searches using SuiteScript, see Searching Overview in the 
 * NetSuite Help Center.
 */
declare interface nlobjSearchResult {

    /**
     * Returns an array of
     * [nlobjSearchColumn(name, join, summary)](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3117719.html)
     * objects containing all the columns returned in a specified search
     * 
     * @since 2009.2
     */
    getAllColumns(): nlobjSearchColumn[];

    getId()

    getRecordType()

    getText(column)

    getText(name, join, summary)

    getValue(name, join, summary)

    getValue(column)
}

/**
 * Primary object used to encapsulate search return columns. For information on
 * executing NetSuite searches using SuiteScript, see Searching Overview in the
 * NetSuite Help Center.
 */
declare class nlobjSearchColumn {

    /**
     * Primary object used to encapsulate search return columns. For information
     * on executing NetSuite searches using SuiteScript, see 
     * [Searching Overview](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_N3000275.html)
     * in the NetSuite Help Center.
     * 
     * @param name The search return column name
     * 
     * @param join The join id for this search return column
     * 
     * @param summary The summary type for this column; see 
     * [Search Summary Types](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3010474.html)
     * for additional information. Available types are:
     * - group
     * - sum
     * - count
     * - avg
     * - min
     * - max
     */
    constructor(
        name: string,
        join?: string,
        summary?: 'group' | 'sum' | 'count' | 'avg' | 'min' | 'max'
    );

    /**
     * @returns Returns the formula used for this column as a string
     * 
     * @since 2009.1
     */
    getFormula(): string;

    /**
     * @returns The function used in this search column as a string
     * 
     * @since 2009.1
     */
    getFunction(): string;

    /**
     * Returns join id for this search column
     * 
     * @returns The join id as a string
     * 
     * @since 2008.1
     */
    getJoin(): string;

    /**
     * Returns the label used for the search column. Note that ONLY custom
     * labels can be returned using this method.
     * 
     * @returns The custom label used for this column as a string
     * 
     * @since 2009.1
     */
    getLabel(): string;

    /**
     * @returns The name of the search column as a string
     * 
     * @since 2008.1
     */
    getName(): string;

    /**
     * Returns the sort direction for this column
     * 
     * @since 2011.1
     */
    getSort(): string;

    /**
     * Returns the summary type (avg, group, sum, count) for this search column.
     * In the NetSuite Help Center, see 
     * [Search Summary Types](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3010474.html)
     * for a list of summary types.
     * 
     * @returns The summary type as a string
     * 
     * @since 2008.1
     */
    getSummary(): string;

    /**
     * Set the formula used for this column. Name of the column can either be 
     * formulatext, formulanumeric, formuladatetime, formulapercent, or 
     * formulacurrency.
     * 
     * @param formula The formula used for this column
     * 
     * @since 2011.1
     */
    setFormula(formula: string): nlobjSearchColumn;

    /**
     * Sets the special function used for this column.
     * 
     * @param functionid Special function used for this column. The following is a list of 
     * [supported functions and their internal IDs](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3117719.html#bridgehead_N3119209):
     * 
     * @since 2011.1
     */
    setFunction(functionid: string): nlobjSearchColumn;

    /**
     * Set the label used for this column.
     * 
     * @param label The label used for this column
     * 
     * @since 2011.1
     */
    setLabel(label: string): nlobjSearchColumn;

    /**
     * Returns nlobjSearchColumn sorted in either ascending or descending order.
     * 
     * @param order If not set, defaults to false, which returns column data in 
     * ascending order. If set to true, data is returned in descending order.
     * 
     * @since 2010.1
     */
    setSort(order?: boolean): nlobjSearchColumn;

    /**
     * Returns the search column for which the minimal or maximal value should 
     * be found when returning the nlobjSearchColumn value.
     * 
     * For example, can be set to find the most recent or earliest date, or the 
     * largest or smallest amount for a record, and then the nlobjSearchColumn 
     * value for that record is returned.
     * 
     * Can only be used when min or max is passed as the summary parameter in 
     * the nlobjSearchColumn constructor.
     * 
     * @param name The name of the search column for which the minimal or 
     * maximal value should be found
     * 
     * @param join The join id for this search column
     * 
     * @since 2012.1
     */
    setWhenOrderedBy(name: string, join: string): nlobjSearchColumn;
}