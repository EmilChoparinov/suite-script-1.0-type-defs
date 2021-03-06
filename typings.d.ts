// TODO: DECLARE {} OF HEADER FIELDS
// DECLARE ALL ANY TYPES
// FIND OUT getFile(id) TYPE FOR nlobjRequest OBJECT
// FIND OUT WHAT Node IS
/*
   -----------------------------------------------------------------------------

                                HELPER INTERFACES

   -----------------------------------------------------------------------------
*/

/**
 * The `CountryCodes` type is an internal type for referencing
 */
type CountryCodes =
    'AD' | 'AE' | 'AF' | 'AG' | 'AI' | 'AL' | 'AM' |
    'AN' | 'AO' | 'AQ' | 'AR' | 'AS' | 'AT' | 'AU' |
    'AW' | 'AZ' | 'BA' | 'BB' | 'BD' | 'BE' | 'BF' |
    'BG' | 'BH' | 'BI' | 'BJ' | 'BL' | 'BM' | 'BN' |
    'BO' | 'BR' | 'BS' | 'BT' | 'BV' | 'BW' | 'BY' |
    'BZ' | 'CA' | 'CC' | 'CD' | 'CF' | 'CG' | 'CH' |
    'CI' | 'CK' | 'CL' | 'CM' | 'CN' | 'CO' | 'CR' |
    'CU' | 'CV' | 'CX' | 'CY' | 'CZ' | 'DE' | 'DJ' |
    'DK' | 'DM' | 'DO' | 'DZ' | 'EC' | 'EE' | 'EG' |
    'EH' | 'ER' | 'ES' | 'ET' | 'FI' | 'FJ' | 'FK' |
    'FM' | 'FO' | 'FR' | 'GA' | 'GB' | 'GD' | 'GE' |
    'GF' | 'GG' | 'GH' | 'GI' | 'GL' | 'GM' | 'GN' |
    'GP' | 'GQ' | 'GR' | 'GS' | 'GT' | 'GU' | 'GW' |
    'GY' | 'HK' | 'HM' | 'HN' | 'HR' | 'HT' | 'HU' |
    'ID' | 'IE' | 'IL' | 'IM' | 'IN' | 'IO' | 'IQ' |
    'IR' | 'IS' | 'IT' | 'JE' | 'JM' | 'JO' | 'JP' |
    'KE' | 'KG' | 'KH' | 'KI' | 'KM' | 'KN' | 'KP' |
    'KR' | 'KW' | 'KY' | 'KZ' | 'LA' | 'LB' | 'LC' |
    'LI' | 'LK' | 'LR' | 'LS' | 'LT' | 'LU' | 'LV' |
    'LY' | 'MA' | 'MC' | 'MD' | 'ME' | 'MF' | 'MG' |
    'MH' | 'MK' | 'ML' | 'MM' | 'MN' | 'MO' | 'MP' |
    'MQ' | 'MR' | 'MS' | 'MT' | 'MU' | 'MV' | 'MW' |
    'MX' | 'MY' | 'MZ' | 'NA' | 'NC' | 'NE' | 'NF' |
    'NG' | 'NI' | 'NL' | 'NO' | 'NP' | 'NR' | 'NU' |
    'NZ' | 'OM' | 'PA' | 'PE' | 'PF' | 'PG' | 'PH' |
    'PK' | 'PL' | 'PM' | 'PN' | 'PR' | 'PS' | 'PT' |
    'PW' | 'PY' | 'QA' | 'RE' | 'RO' | 'RS' | 'RU' |
    'RW' | 'SA' | 'SB' | 'SC' | 'SD' | 'SE' | 'SG' |
    'SH' | 'SI' | 'SJ' | 'SK' | 'SL' | 'SM' | 'SN' |
    'SO' | 'SR' | 'ST' | 'SV' | 'SY' | 'SZ' | 'TC' |
    'TD' | 'TF' | 'TG' | 'TH' | 'TJ' | 'TK' | 'TM' |
    'TN' | 'TO' | 'TP' | 'TR' | 'TT' | 'TV' | 'TW' |
    'TZ' | 'UA' | 'UG' | 'UM' | 'US' | 'UY' | 'UZ' |
    'VA' | 'VC' | 'VE' | 'VG' | 'VI' | 'VN' | 'VU' |
    'WF' | 'WS' | 'YE' | 'YT' | 'ZA' | 'ZM' | 'ZW';

type SearchOperators =
    'after' | 'allof' | 'any' | 'anyof' | 'before' | 'between' | 'contains' |
    'doesnotcontain' | 'doesnotstartwith' | 'equalto' | 'greaterthan' |
    'greaterthanorequalto' | 'haskeywords' | 'is' | 'isempty' | 'isnot' |
    'isnotempty' | 'lessthan' | 'lessthanorequalto' | 'noneof' | 'notafter' |
    'notallof' | 'notbefore' | 'notbetween' | 'notequalto' | 'notgreaterthan' |
    'notgreaterthanorequalto' | 'notlessthan' | 'notlessthanorequalto' |
    'noton' | 'notonorafter' | 'notonorbefore' | 'notwithin' | 'on' |
    'onorafter' | 'onorbefore' | 'startswith' | 'within';

type SearchDateFilters =
    'fiscalHalfBeforeLast' | 'fiscalHalfBeforeLastToDate' |
    'fiscalQuarterBeforeLast' | 'fiscalQuarterBeforeLastToDate' |
    'fiscalYearBeforeLast' | 'fiscalYearBeforeLastToDate' | 'fiveDaysAgo' |
    'fiveDaysFromNow' | 'fourDaysAgo' | 'fourDaysFromNow' |
    'fourWeeksStartingThisWeek' | 'lastBusinessWeek' | 'lastFiscalHalf' |
    'lastFiscalHalfOneFiscalYearAgo' | 'lastFiscalHalfToDate' |
    'lastFiscalQuarter' | 'lastFiscalQuarterOneFiscalYearAgo' |
    'lastFiscalQuarterToDate' | 'lastFiscalQuarterTwoFiscalYearsAgo' |
    'lastFiscalYear' | 'lastFiscalYearToDate' | 'lastMonth' |
    'lastMonthOneFiscalQuarterAgo' | 'lastMonthToDate' |
    'lastMonthTwoFiscalQuartersAgo' | 'lastMonthTwoFiscalYearsAgo' |
    'lastRollingHalf' | 'lastRollingQuarter' | 'lastRollingYear' | 'lastWeek' |
    'lastWeekToDate' | 'monthAfterNext' | 'monthAfterNextToDate' |
    'monthBeforeLast' | 'monthBeforeLastToDate' | 'nextBusinessWeek' |
    'nextFiscalHalf' | 'nextFiscalQuarter' | 'nextFiscalYear' |
    'nextFourWeeks' | 'nextMonth' | 'nextOneHalf' | 'nextOneMonth' |
    'nextOneQuarter' | 'nextOneWeek' | 'nextOneYear' | 'nextWeek' |
    'ninetyDaysAgo' | 'ninetyDaysFromNow' | 'oneYearBeforeLast' |
    'previousFiscalQuartersLastFiscalYear' |
    'previousFiscalQuartersThisFiscalYear' | 'previousMonthsLastFiscalHalf' |
    'previousMonthsLastFiscalQuarter' | 'previousMonthsLastFiscalYear' |
    'previousMonthsSameFiscalHalfLastFiscalYear' |
    'previousMonthsSameFiscalQuarterLastFiscalYear' |
    'previousMonthsThisFiscalHalf' | 'previousMonthsThisFiscalQuarter' |
    'previousMonthsThisFiscalYear' | 'previousOneDay' | 'previousOneHalf' |
    'previousOneMonth' | 'previousOneQuarter' | 'previousOneWeek' |
    'previousOneYear' | 'previousRollingHalf' | 'previousRollingQuarter' |
    'previousRollingYear' | 'sameDayFiscalQuarterBeforeLast' |
    'sameDayFiscalYearBeforeLast' | 'sameDayLastFiscalQuarter' |
    'sameDayLastFiscalYear' | 'sameDayLastMonth' | 'sameDayLastWeek' |
    'sameDayMonthBeforeLast' | 'sameDayWeekBeforeLast' |
    'sameFiscalHalfLastFiscalYear' | 'sameFiscalHalfLastFiscalYearToDate' |
    'sameFiscalQuarterFiscalYearBeforeLast' |
    'sameFiscalQuarterLastFiscalYear' |
    'sameFiscalQuarterLastFiscalYearToDate' |
    'sameMonthFiscalQuarterBeforeLast' | 'sameMonthFiscalYearBeforeLast' |
    'sameMonthLastFiscalQuarterToDate' | 'sameMonthLastFiscalYear' |
    'sameMonthLastFiscalYearToDate' | 'sameWeekFiscalYearBeforeLast' |
    'sameWeekLastFiscalYear' | 'sixtyDaysAgo' | 'sixtyDaysFromNow' |
    'startOfFiscalHalfBeforeLast' | 'startOfFiscalQuarterBeforeLast' |
    'startOfFiscalYearBeforeLast' | 'startOfLastBusinessWeek' |
    'startOfLastFiscalHalf' | 'startOfLastFiscalHalfOneFiscalYearAgo' |
    'startOfLastFiscalQuarter' | 'startOfLastFiscalQuarterOneFiscalYearAgo' |
    'startOfLastFiscalYear' | 'startOfLastMonth' |
    'startOfLastMonthOneFiscalQuarterAgo' | 'startOfLastMonthOneFiscalYearAgo' |
    'startOfLastRollingHalf' | 'startOfLastRollingQuarter' |
    'startOfLastRollingYear' | 'startOfLastWeek' | 'startOfMonthBeforeLast' |
    'startOfNextBusinessWeek' | 'startOfNextFiscalHalf' |
    'startOfNextFiscalQuarter' | 'startOfNextFiscalYear' | 'startOfNextMonth' |
    'startOfNextWeek' | 'startOfPreviousRollingHalf' |
    'startOfPreviousRollingQuarter' | 'startOfPreviousRollingYear' |
    'startOfSameFiscalHalfLastFiscalYear' |
    'startOfSameFiscalQuarterLastFiscalYear' |
    'startOfSameMonthLastFiscalQuarter' | 'startOfSameMonthLastFiscalYear' |
    'startOfThisBusinessWeek' | 'startOfThisFiscalHalf' |
    'startOfThisFiscalQuarter' | 'startOfThisFiscalYear' | 'startOfThisMonth' |
    'startOfThisWeek' | 'startOfThisYear' | 'startOfWeekBeforeLast' |
    'tenDaysAgo' | 'tenDaysFromNow' | 'thirtyDaysAgo' | 'thirtyDaysFromNow' |
    'thisBusinessWeek' | 'thisFiscalHalf' | 'thisFiscalHalfToDate' |
    'thisFiscalQuarter' | 'thisFiscalQuarterToDate' | 'thisFiscalYear' |
    'thisFiscalYearToDate' | 'thisMonth' | 'thisMonthToDate' |
    'thisRollingHalf' | 'thisRollingQuarter' | 'thisRollingYear' | 'thisWeek' |
    'thisWeekToDate' | 'thisYear' | 'threeDaysAgo' | 'threeDaysFromNow' |
    'threeFiscalQuartersAgo' | 'threeFiscalQuartersAgoToDate' |
    'threeFiscalYearsAgo' | 'threeFiscalYearsAgoToDate' | 'threeMonthsAgo' |
    'threeMonthsAgoToDate' | 'today' | 'tomorrow' | 'twoDaysAgo' |
    'twoDaysFromNow' | 'weekAfterNext' | 'weekAfterNextToDate' |
    'weekBeforeLast' | 'weekBeforeLastToDate' | 'yesterday';


/**
 * The initializeValues parameter is an Object that can contain an array of
 * name/value pairs of defaults that are passed upon record initialization. The
 * following table lists initialization types that are available to certain
 * SuiteScript-supported records and the values they can contain.
 * For examples, see 
 * [Record Initialization Examples](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_N3223419.html#bridgehead_N3224681).
 */
declare interface RecordInitializationDefaults {
    recordmode?: 'dynamic';
    customform?: string;
    deletionreason?: string;
    deletionreasonmemo?: string;
    assemblyitem?: string;
    entity?: string;
    disablepaymentfilters?: string;
    subtype?: 'sale' | 'resale' | 'purchase';
    nexuscountry?: CountryCodes;
    country?: CountryCodes;
    parenttopic?: string;
}

/*
   -----------------------------------------------------------------------------

                        GLOBAL METHODS AND CONSTANTS

   -----------------------------------------------------------------------------
*/

/*
   --------------------------------------------------

           RECORD APIS

   --------------------------------------------------
*/

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
declare function nlapiAttachRecord(
    type: string,
    id: number,
    type2: string,
    id2: number,
    attributes?: any
): void;

/**
 * Initializes a new record using field data from an existing record. Note that
 * this API simply creates a new instance of another record. After making
 * changes to the copy, you must submit the copy (which is considered as a new
 * record) to the database for your changes to be committed to NetSuite.
 * 
 * This API is supported in all script types. See SuiteScript 1.0 API Governance
 * for the unit cost associated with this API.
 * 
 * @param type The record internal ID name. For a list of supported record types
 * and their internal IDs, see 
 * [SuiteScript Supported Records](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_N3170023.html)
 * in the NetSuite Help Center.
 * 
 * @param id The internalId for the record. If you are unsure how to find a 
 * record's internalId, see 
 * [Showing Record and Field IDs in Your Account](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N2903915.html).
 * 
 * @param initializeValues Contains an array of name/value pairs of defaults to
 * be used during record initialization. For a list of record initialization
 * types and the values they can take, see Record Initialization Defaults in the
 * NetSuite Help Center.
 */
declare function nlapiCopyRecord(
    type: string,
    id: number,
    initializeValues?: RecordInitializationDefaults
): nlobjRecord;

/**
 * Initializes a new record and returns an
 * [nlobjCSVImport](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3084719.html)
 * object. You can then use the methods available on the returned record object
 * to populate the object with the desired information. Next, you can pass this
 * object to 
 * [nlapiSubmitCSVImport(nlobjCSVImport)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3027360.html#bridgehead_N3031452),
 * which asynchronously imports the data from the returned object into NetSuite.
 * 
 * Note that this API cannot be used to import data that is imported by (2-step)
 * assistants in the UI, because these import types do not support saved import
 * maps. This limitation applies to budget, single journal entry, single
 * inventory worksheet, project tasks, and website redirects imports.
 * 
 * @returns An
 * [nlobjCSVImport](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3084719.html)
 * object to be passed as a parameter to 
 * [nlapiSubmitCSVImport(nlobjCSVImport)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3027360.html#bridgehead_N3031452).
 * 
 * @since 2012.2
 */
declare function nlapiCreateCSVImport(): nlobjCSVImport;

/**
 * With scriptable e-mail templates (Freemarker templates), you can create
 * dynamic templates for e-mail marketing campaigns and system e-mail. See
 * Scriptable Templates for additional information.
 * 
 * This API is called as the first step in performing a mail merge with an
 * existing scriptable e-mail template. The following record types are supported:
 * 
 * - Contact
 * 
 * - Case
 * 
 * - Customer
 * 
 * - Employee
 * 
 * - Partner
 * 
 * - Vendor
 * 
 * - All transaction types
 * 
 * - All custom records
 * 
 * @param templateId Internal ID of the scriptable template you want to use.
 * 
 * @returns an nlobjEmailMerger object
 * 
 * @throws SSS_MERGER_ERROR_OCCURRED – Thrown if the email merger fails.
 * 
 * @since 2015.1
 */
declare function nlapiCreateEmailMerger(templateId: number): nlobjEmailMerger;

/**
 * Initializes a new record and returns an 
 * [nlobjRecord](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html)
 * object containing all the default field data for that record type. You can
 * then use the methods available on the returned record object to populate the 
 * record with the desired information.
 * 
 * The nlapiCreateRecord function must be followed by the 
 * [nlapiSubmitRecord(record, doSourcing, ignoreMandatoryFields)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3027360.html#bridgehead_N3031704)
 * function before the record is actually committed to the database.
 * 
 * This API is supported in all script types. See SuiteScript 1.0 API Governance
 * for the unit cost associated with this API.
 * 
 * @param type The record internal ID name. For a list of supported record types
 * and their internal IDs, see SuiteScript Supported Records in the NetSuite
 * Help Center.
 * 
 * @param initializeValues Contains an array of name/value pairs of defaults to
 * be used during record initialization.For a list of record initialization
 * types and the values they can take, see Record Initialization Defaults in the
 * NetSuite Help Center.
 * 
 * @returns An nlobjRecord object of a new record
 * 
 * @throws SSS_INVALID_RECORD_TYPE
 * 
 * @throws SSS_TYPE_ARG_REQD
 */
declare function nlapiCreateRecord(
    type: string,
    initializeValues?: RecordInitializationDefaults
): nlobjRecord;

/**
 * @param type The record internal ID name. For a list of supported record types
 * and their internal IDs, see 
 * [SuiteScript Supported Records](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_N3170023.html)
 * in the NetSuite Help Center.
 * 
 * @param id The internalId for the record
 * 
 * @param initializeValues Contains an array of name/value pairs of defaults to 
 * be used during record initialization. For a list of record initialization
 * types and the values they can take, see 
 * [Record Initialization Defaults](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_N3223419.html)
 * in the NetSuite Help Center.
 * 
 * @throws SSS_INVALID_RECORD_TYPE
 * 
 * @throws SSS_TYPE_ARG_REQD
 * 
 * @throws SSS_INVALID_INTERNAL_ID
 * 
 * @throws SSS_ID_ARG_REQD
 */
declare function nlapiDeleteRecord(
    type: string,
    id: number,
    initializeValues?: RecordInitializationDefaults
): void;


/**
 * @param type The record internal ID name for the record being detached. For a
 * list of record names, see the column called “Record Internal ID” in SuiteScript
 * Supported Records.
 * 
 * @param id The record internalId for the record being detached
 * 
 * @param type2 The record internal ID name for the record being detached from.
 * Note that if detaching an entity from a static entity group, the internal ID
 * for the entity group record type is **entitygroup**.
 * 
 * @param id2 The record internalId for the record being detached from
 * 
 * @param attributes Name/value pairs containing attributes for the attachment:
 * 
 * - customrecord*->parent record: field (the custom field used to link child
 * custom record to parent record)
 * 
 * @since 2008.1
 */
declare function nlapiDetachRecord(
    type: string,
    id: number,
    type2: string,
    id2: number,
    attributes?: { [key: string]: string }
): void;

/**
 * Available in `beforeLoad`, `beforeSubmit`, and `afterSubmit` user event
 * scripts. You are not allowed to submit the current or previous record
 * returned by `nlapiGetNewRecord`.
 * 
 * When triggered by an inline edit event `(type == xedit)`, this function only
 * returns the field and sublist line item values that were edited. For all
 * other triggers, `nlapiGetNewRecord` returns all record object values.
 * 
 * @returns An nlobjRecord containing all the values being used for a write
 * operation
 */
declare function nlapiGetNewRecord(): nlobjRecord;

/**
 * Available in `beforeLoad`, `beforeSubmit`, and `afterSubmit` user event
 * scripts. You are not allowed to submit the current or previous record
 * returned by `nlapiGetOldRecord`.
 * 
 * @returns An 
 * [nlobjRecord](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html)
 * containing all the values for the current record prior to the write operation
 */
declare function nlapiGetOldRecord(): nlobjRecord;

/**
 * Use this API to retrieve the `internalId` of the current record in a user 
 * event script. This API is available in client and user event scripts only.
 * 
 * @returns The integer value of the record whose form the user is currently on,
 * or for the record that the current user event script is executing on. Note
 * that the value of **-1** is returned if there is no current record or the
 * current record is a new record.
 */
declare function nlapiGetRecordId(): number;

/**
 * Use this API to retrieve the record type `internal` ID of the current record 
 * in a user event script or a client script. If there is no current record 
 * type, the value of **null** will be returned.
 * 
 * @returns The record type internal ID as a string. Example return values are:
 * 
 * - **salesorder** for a script executed on a Sales Order record
 * 
 * - **customer** for a script executed on a Customer record
 * 
 * - **promotioncode** for a script executed on the Promotion record
 */
declare function nlapiGetRecordType(): string | null;

/**
 * Loads an existing record from the system and returns an nlobjRecord object
 * containing all the field data for that record. You can then extract the
 * desired information from the loaded record using the methods available on the
 * returned record object. This API is a core API. It is available in both
 * client and server contexts.
 * 
 * @param type The record internal ID name. This parameter is case-insensitive. 
 * In the NetSuite Help Center, see 
 * [SuiteScript Supported Records](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_N3170023.html).
 * Use the values listed in the column “Record Internal ID”.
 * 
 * @param id internalId for the record, for example 555 or 78.
 * 
 * @param initializeValues Contains an array of name/value pairs of defaults to
 * be used during record initialization. For a list of record initialization
 * types and the values they can take, see
 * [Record Initialization Defaults](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_N3223419.html)
 * in the NetSuite Help Center.
 * 
 * @returns An 
 * [nlobjRecord](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html)
 * object of an existing NetSuite record. This function returns the record object
 * **exactly** as the record appears in the system. Therefore, in beforeLoad
 * user event scripts, if you attempt to change a field and load the record
 * simultaneously, the change will not take effect.
 * 
 * @throws SSS_INVALID_RECORD_TYPE
 * 
 * @throws SSS_TYPE_ARG_REQD
 * 
 * @throws SSS_INVALID_INTERNAL_ID
 * 
 * @throws SSS_ID_ARG_REQD
 */
declare function nlapiLoadRecord(
    type: string,
    id: number,
    initializeValues?: RecordInitializationDefaults
): nlobjRecord;

/**
 * Returns an 
 * [nlobjFile]()
 * object containing the PDF or HTML document. This API is supported in user
 * event, scheduled, and Suitelet scripts.
 * 
 * ** NOTE: There is a 10MB limitation to the size of the file that can be accessed
 * using this API. Direct manipulation of the print URL is not supported.**
 * 
 * @param type Print operation type. Can be any of the following:
 * 
 * - TRANSACTION
 * 
 * - STATEMENT
 * 
 * - PACKINGSLIP
 * 
 * - PICKINGTICKET
 * 
 * - BILLOFMATERIAL
 * 
 * @param id The internal ID of the transaction or statement being printed
 * 
 * @param mode The output type: PDF|HTML|DEFAULT. DEFAULT uses the user/company
 * preference for print output
 * 
 * @param properties Name/value pairs used to configure the print operation
 * 
 * - TRANSACTION: formnumber
 * 
 * - STATEMENT: openonly (T|F), startdate, statementdate, formnumber
 * 
 * - PACKINGSLIP: formnumber, itemfulfillment
 * 
 * - PICKINGTICKET: formnumber, shipgroup, location
 * 
 * @param incustlocale This parameter applies when advanced templates are used.
 * If not set, this argument defaults to false, which means that the document is
 * printed in the default company language. If set to true, the document is
 * printed in the customer's locale.
 * 
 * @returns 2008.1
 */
declare function nlapiPrintRecord(
    type: string,
    id: number,
    mode?: string,
    properties?: {
        TRANSACTION: number,
        STATEMENT: boolean | Date | number,
        PACKINGSLIP: number,
        PICKINGTICKET: number | string
    },
    incustlocale?: boolean
): nlobjFile;

/**
 * Submits a CSV import job to asynchronously import record data into NetSuite.
 * This API can be used to:
 * 
 * - Automate standard record data import for SuiteApp installations, demo
 * environments, and testing environments.
 * 
 * - Import data on a schedule using a scheduled script.
 * 
 * - Build integrated CSV imports with RESTlets.
 * 
 * When the API is executed, the import job is added to the queue. The progress 
 * of an import job can be viewed at
 * *Setup > Issues > Issue Management > Import Issue Records > Status (Administrator)*.
 * For details, see 
 * [Checking CSV Import Status](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N350581.html).
 * 
 * @param nlobjCSVImport nlobjCSVImport object with methods to set the
 * following: saved import map, primary file, linked file(s) (optional), import
 * job name (optional).
 * 
 * @returns Job ID of the import (which is also the identifier for the CSV
 * response file)
 * 
 * @throws This API throws errors resulting from inline validation of CSV file
 * data before the import of data begins (the same validation that is performed
 * between the mapping step and the save step in the Import Assistant). Any
 * errors that occur during the import job are recorded in the CSV response file,
 * as they are for imports initiated through the Import Assistant.
 * 
 * @since 2012.1
 */
declare function nlapiSubmitCSVImport(
    nlobjCSVImport: nlobjCSVImport
): nlobjCSVImport;

/**
 * Submits and commits new records or changes applied to an existing record and
 * returns the internalId for the committed record. The nlapiSubmitRecord
 * function can be used in conjunction with nlapiCreateRecord or nlapiLoadRecord
 * to create or modify a record related to the current one.
 * 
 * @param record [nlobjRecord](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html)
 * object containing the data record
 * 
 * @param doSourcing If not set, this argument defaults to false, which means
 * that dependent field values are not sourced. If set to true, sources
 * dependent field information for empty fields. Be aware that doSourcing takes
 * the values of true or false, not T or F. For more information on sourcing,
 * see
 * [Understanding Sourcing in SuiteScript](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3027360.html#bridgehead_N3031962)
 * in the NetSuite Help Center.
 * 
 * @param ignoreMandatoryFields Disables mandatory field validation for this
 * submit operation. If set to true, ignores all standard and custom fields that
 * were made mandatory through customization. All fields that were made
 * mandatory through company preferences are also ignored.
 * 
 * @returns An integer value of the committed record's internal ID (for example,
 * 555, 21, or 4).
 * 
 * @throws SSS_INVALID_RECORD_OBJ
 * 
 * @throws SSS_RECORD_OBJ_REQD
 * 
 * @throws SSS_INVALID_SOURCE_ARG
 * 
 */
declare function nlapiSubmitRecord(
    record: nlobjRecord,
    doSourcing?: boolean,
    ignoreMandatoryFields?: boolean
): number;

/**
 * Initializes a new record using data from an existing record of a different
 * type and returns an nlobjRecord. This function can be useful for automated
 * order processing such as creating item fulfillment transactions and invoices
 * off of orders.
 * 
 * This API is supported in client, user event, scheduled, and Suitelet scripts.
 * See SuiteScript 1.0 API Governance for the unit cost associated with this
 * API.
 * 
 * @param type The record internal ID name. In the NetSuite Help Center, see
 * [SuiteScript Supported Records](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_N3170023.html).
 * The internal ID appears in the column called “Record Internal ID”.
 * 
 * @param id The internalId for the record, for example 555 or 78.
 * 
 * @param transformType The record internal ID name of the record you are
 * transforming the existing record into
 * 
 * @param transformValues An array of field name -> value pairs containing field
 * defaults used for transformation. Note that you can also specify whether you
 * want the record transformation to occur in dynamic mode. For details, see
 * [Working with Records in Dynamic Mode](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N2941943.html).
 * 
 * @throws SSS_INVALID_URL_CATEGORY
 * 
 * @throws SSS_CATEGORY_ARG_REQD
 * 
 * @throws SSS_INVALID_TASK_ID
 * 
 * @throws SSS_TASK_ID_REQD
 * 
 * @throws SSS_INVALID_INTERNAL_ID
 * 
 * @throws SSS_INVALID_EDITMODE_ARG
 */
declare function nlapiTransformRecord(
    type: string,
    id: number,
    transformType: string,
    transformValues?: any
): nlobjRecord;

/**
 * When you void a transaction, its total and all its line items are set to
 * zero, but the transaction is not removed from the system. NetSuite supports
 * two types of voids: direct voids and voids by reversing journal. See the help
 * topic 
 * [Voiding, Deleting, or Closing Transactions](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N563543.html)
 * for additional information.
 * 
 * `nlapiVoidTransaction` voids a transaction and then returns an id that
 * indicates the type of void performed. If a direct void is performed,
 * `nlapiVoidTransaction` returns the ID of the record voided. If a void by
 * reversing journal is performed, nlapiVoidTransaction returns the ID of the
 * newly created voiding journal.
 * 
 * @param transactionType internal ID of the record type to be voided. See the
 * help topics
 * [Supported Transaction Types — Direct Void](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3027360.html#bridgehead_3784196293) 
 * and 
 * [Supported Transaction Types — Void by Reversing Journal](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3027360.html#bridgehead_3784205413)
 * for a list of valid arguments.
 * 
 * @param recordId the internal ID of the specific record to be voided. See the
 * help topic
 * [How do I find a record's internal ID?](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N2904065.html)
 * for additional information.
 * 
 * @returns An id that indicates the type of void performed
 * 
 * - If a direct void is performed, nlapiVoidTransaction returns the original
 * recordId value passed in.
 * 
 * - If a void by reversing journal is performed, nlapiVoidTransaction returns
 * the ID of the newly created voiding journal.
 * 
 * @throws INVALID_RCRD_TYPE — if the transactionType argument passed is not
 * valid
 * 
 * @throws RCRD_DSNT_EXIST — if the recordId argument passed is not valid
 * @throws THIS_TRANSACTION_HAS_ALREADY_BEEN_VOIDED — if you attempt to void a
 * transaction that has already been voided
 * 
 * @throws VOIDING_REVERSAL_DISALLWD — if you attempt to void a transaction with
 * inventory impact
 * 
 * @since 2013.2
 */
declare function nlapiVoidTransaction(
    transactionType: string,
    recordId: number
): number;

/**
 * Primary object used to encapsulate a CSV import job. This object is passed as a parameter to
 * [nlapiSubmitCSVImport(nlobjCSVImport)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3027360.html#bridgehead_N3031452),
 * which is used to asynchronously import record data into NetSuite.
 * 
 * Use 
 * [nlapiCreateCSVImport( )](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3027360.html#bridgehead_N3028261)
 * to return an nlobjCSVImport object. You can then use the object's methods to 
 * populate it with the desired information.
 */
declare interface nlobjCSVImport {

    /**
     * Sets the data to be imported in a linked file for a multi-file import
     * job, by referencing a file in the file cabinet using 
     * [nlapiLoadFile(id)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3066995.html#bridgehead_N3067506),
     * or by inputting CSV data as raw string.
     * 
     * If an import job requires multiple linked files, this method can be
     * executed multiple times, one time for each linked file.
     * 
     * @param sublist The internal ID of the record sublist for which data is being imported.
     * 
     * @param file Can be one of the following:
     * 
     * - An [nlobjFile](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3087039.html)
     * object, encapsulating a CSV file, that contains the data to be imported.
     * The CSV file must be uploaded to the file cabinet before it can be used
     * in this context. The 
     * [nlobjFile](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3087039.html)
     * object is loaded with
     * [nlapiLoadFile(id)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3066995.html#bridgehead_N3067506).
     * To load the
     * [nlobjFile](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3087039.html)
     * object, pass the internal ID of the specific CSV file to be loaded, as
     * shown below. The internal ID of the CSV file is listed in the file
     * cabinet, under the Internal ID column.
     * 
     * - Raw string of the data to be imported.
     * 
     * @throws SSS_INVALID_CSV_CONTENT — Thrown when an invalid value is passed
     * as the file argument.
     * 
     * @since 2012.2
     */
    setLinkedFile(sublist: string, file: string): void;

    /**
     * Sets the name of the saved import map to be used for an import, by
     * referencing the internal ID or script ID of the import map.
     * 
     * @param savedImport The internal ID or script ID of the saved mapping to
     * use for the import job. The internal ID is system-defined and is
     * displayed in the ID column at Setup > Import/Export > Saved CSV Imports.
     * The script ID can be defined in the Import Assistant and is also
     * displayed on this page.
     * 
     * @since 2012.2
     */
    setMapping(savedImport: string): void;

    /**
     * Sets the name of the import job to be shown on the status page for CSV
     * imports.
     * 
     * @param option The name of the option, in this case, jobName.
     * 
     * @param value The value for the jobName option, meaning the text to be
     * displayed in the Job Name column at 
     * `Setup > Issues > Issue Management > Import Issue Records > Status 
     * (Administrator)`. The default job name format is: 
     * `<import type> - <csv file name> - <email address of logged-in user>`.
     * 
     * @since 2012.2
     */
    setOption(option: string, value: string): void;

    /**
     * Sets the data to be imported in the primary file for an import job, by
     * referencing a file in the file cabinet using nlapiLoadFile, or by
     * inputting CSV data as raw string.
     * 
     * @param file Can be one of the following:
     * 
     * - The internal ID, as shown in the file cabinet, of the CSV file
     * containing data to be imported, referenced by nlapiLoadFile.
     * 
     * - Raw string of the data to be imported.
     * 
     * @throws SSS_INVALID_CSV_CONTENT — Thrown when an invalid value is passed 
     * as the file argument.
     * 
     * @example setPrimaryFile(nlapiLoadFile(73))
     * 
     * @since 2012.2
     */
    setPrimaryFile(file: string): void;

    /**
     * Overrides the CSV import queue preference. The stored queue preference is
     * not altered; setQueue must be called each time an override is needed.
     * 
     * @param string The new queue number. Valid values range from ‘1’ to ‘5’,
     * depending upon the SuiteCloud License.
     * 
     * @throws SSS_INVALID_CSV_QUEUE — Thrown for all invalid values passed as
     * the string argument.
     * 
     * @since 2014.1
     */
    setQueue(string: string): void;
}

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

/*
   --------------------------------------------------

           SUBRECORD APIS

   --------------------------------------------------
*/

/**
 * Returns a nlobjSubrecord object. Use this API to create a subrecord from a
 * sublist field on the parent record.
 * 
 * @param sublist The sublist internal ID on the parent record (for example, use
 * item as the ID for the Items sublist).
 * 
 * @param fldname The internal ID of the “subrecord field” on the sublist of the
 * parent record (for example, inventorydetail as the ID for the Inventory
 * Details sublist field).
 * 
 * @since 2011.2
 */
declare function nlapiCreateCurrentLineItemSubrecord(
    sublist: string,
    fldname: string
): nlobjSubrecord;

/**
 * Returns a nlobjSubrecord object. Use this API to create a subrecord from a
 * body field on the parent record.
 * 
 * @param fldname The internal ID of the “subrecord field” on the body of the
 * parent record (for example, inventorydetail as the ID for the Inventory
 * Details body field).
 * 
 * @since 2011.2
 */
declare function nlapiCreateSubrecord(fldname: string): nlobjSubrecord;

/**
 * Returns a nlobjSubrecord object. Use this API to edit a subrecord from a
 * sublist field on the parent record.
 * 
 * @param sublist The sublist internal ID on the parent record (for example, use
 * item as the ID for the Items sublist).
 * 
 * @param fldname The internal ID of the “subrecord field” on the sublist of the
 * parent record (for example, inventorydetail as the ID for the Inventory
 * Details sublist field).
 * 
 * @since 2011.2
 */
declare function nlapiEditCurrentLineItemSubrecord(
    sublist: string,
    fldname: string
): nlobjSubrecord;

/**
 * Returns a nlobjSubrecord object. Use this API to edit a subrecord from a 
 * **body** field on the parent record.
 * 
 * @param fldname The internal ID of the “subrecord field” on the body of the
 * parent record (for example, inventorydetail as the ID for the Inventory
 * Details body field).
 * 
 * @since 2011.2
 */
declare function nlapiEditSubrecord(fldname: string): nlobjSubrecord;

/**
 * Returns a nlobjSubrecord object. Use this API to remove a subrecord from a
 * sublist field on the parent record.
 * 
 * @param sublist The sublist internal ID on the parent record (for example, use
 * item as the ID for the Items sublist).
 * 
 * @param fldname The internal ID of the “subrecord field” on the sublist of the
 * parent record (for example, inventorydetail as the ID for the Inventory
 * Details sublist field).
 * 
 * @since 2011.2
 */
declare function nlapiRemoveCurrentLineItemSubrecord(sublist, fldname): void;

/**
 * Returns a nlobjSubrecord object. Use this API to remove a subrecord from a
 * body field on the parent record.
 * 
 * This API is currently used only in the context of the / Numbered Inventory
 * feature. For information, see Using SuiteScript with / Numbered Inventory
 * Management.
 *  
 * @param fldname The internal ID of the “subrecord field” on the body of the
 * parent record (for example, inventorydetail as the ID for the Inventory
 * Details body field).
 * 
 * @since 2011.2
 */
declare function nlapiRemoveSubrecord(fldname: string): void;

/**
 * Returns a `nlobjSubrecord` object. Use this API to view a subrecord from a
 * **sublist** field on the parent record. Calling this API analogous to doing a
 * “get” on a subrecord, however, the nlobjSubrecord object returned is in 
 * **read-only** mode. Therefore, an error is thrown if you attempt to edit a
 * subrecord returned by this API.
 * 
 * You can call this API when you want your script to read the
 * [nlobjSubrecord](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3126577.html)
 * object of the current sublist line you are on. After you get the
 * [nlobjSubrecord](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3126577.html)
 * object, you can use regular record API to access its values.
 * 
 * This API is currently used only in the context of the / Numbered Inventory
 * feature. For information, see Using SuiteScript with / Numbered Inventory
 * Management.
 * 
 * @param sublist The sublist internal ID on the parent record (for example, use
 * item as the ID for the Items sublist).
 * 
 * @param fldname The internal ID of the “subrecord field” on the sublist of the
 * parent record (for example, inventorydetail as the ID for the Inventory
 * Details sublist field).
 * 
 * @since 2011.2
 */
declare function nlapiViewCurrentLineItemSubrecord(
    sublist: string,
    fldname: string
): nlobjSubrecord;

/**
 * Returns a nlobjSubrecord object. Use this API to view a subrecord from a
 * **sublist** field on the parent record. Calling this API analogous to doing a
 * “get” on a subrecord, however, the `nlobjSubrecord` object returned is in
 * read-only mode. Therefore, an error is thrown if you attempt to edit a
 * subrecord returned by this function.
 * 
 * You can call this API when you want to read the value of a line you are
 * **not** currently on (or have not selected). For example, if you are editing
 * line 2 as your current line, you can call `nlapiViewLineItemSubrecord` on 
 * line 1 to get the value of line 1.
 * 
 * This API is currently used only in the context of the / Numbered Inventory
 * feature. For information, see Using SuiteScript with / Numbered Inventory
 * Management.
 * 
 * @param sublist The sublist internal ID on the parent record (for example, use
 * item as the ID for the Items sublist).
 * 
 * @param fldname The internal ID of the “subrecord field” on the sublist of the
 * parent record (for example, inventorydetail as the ID for the Inventory
 * Details sublist field).
 * 
 * @param linenum The line number for the sublist field. Note the first line
 * number on a sublist is 1 (not 0).
 * 
 * @since 2011.2
 */
declare function nlapiViewLineItemSubrecord(
    sublist: string,
    fldname: string,
    linenum: number
): nlobjSubrecord;

/**
 * Returns a nlobjSubrecord object. Use this API to view a subrecord from a
 * **body** field on the parent record. Calling this API analogous to doing a
 * “get” on a subrecord, however, the nlobjSubrecord object returned is in
 * read-only mode. Therefore, an error is thrown if you attempt to edit a
 * subrecord returned by this function.
 * 
 * This API is currently used only in the context of the / Numbered Inventory
 * feature. For information, see Using SuiteScript with / Numbered Inventory
 * Management. 
 * 
 * @param fldname The internal ID of the “subrecord field” on the body of the
 * parent record (for example, inventorydetail as the ID for the Inventory
 * Details body field).
 * 
 * @sincce 2011.2
 */
declare function nlapiViewSubrecord(fldname: string): nlobjSubrecord;

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

/*
   --------------------------------------------------

           FIELD APIS

   --------------------------------------------------
*/

/**
 * Sets the field to disabled or enabled based on the value (true or false).
 * This API is supported in client scripts only.
 * 
 * @param fldnam The internal ID name of the field to enable/disable
 * 
 * @param val If set to true, the field is disabled. If set to false, it is
 * enabled.
 */
declare function nlapiDisableField(fldnam: string, val: boolean): void;

/**
 * Use this function to obtain **body** field metadata. Calling this function
 * instantiates the nlobjField object, and you can use the methods available to
 * nlobjField to get field metadata.
 * 
 * @param fldnam The internal ID of the field.
 * 
 * @returns Returns an
 * [nlobjField](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3140379.html)
 * object representing this field
 * 
 * @since 2009.1
 */
declare function nlapiGetField(fldnam: string): nlobjField;

/**
 * Use this API to get the text value (rather than the internal ID value) of a
 * field. This API is available in client and user event scripts only.
 * 
 * @param fldnam The internal ID of the field.
 * 
 * @returns The string UI display name for a select field corresponding to the
 * current selection.
 * 
 * **NOTE:** For multiselect fields, this API returns the display names as a
 * string with the \u0005 separator.
 */
declare function nlapiGetFieldText(fldnam: string): string;

/**
 * Returns the display names for a multiselect field corresponding to the
 * current selection. This API is available in client and user event scripts
 * only.
 * 
 * @param fldnam The internal ID of the field whose display values are returned
 * 
 * @returns The display names for a multiselect field as an Array.
 * 
 * @since 2009.1
 */
declare function nlapiGetFieldTexts(fldnam: string): string[];

/**
 * Use this function to get the internal ID of a field. For example, if the
 * customer Abe Simpson appears in a field, this function will return 87, which
 * represents the internal ID value of the Abe Simpson customer record. Note
 * that if you are getting the value of an inline check box, the return value
 * will be F if the field is unset.
 * 
 * @param fldnam The internal ID of the field.
 * 
 * @returns The string value of a field on the current record, or returns null
 * if the field does not exist on the record or the field is restricted.
 */
declare function nlapiGetFieldValue(fldnam: string): string | null;

/**
 * Use this function to get an array of internal ID values for a multiselect
 * field.
 * 
 * This API is available in client and user event scripts only.
 * 
 * @param fldnam The internal ID of the field. For a list of fields that are 
 * supported in SuiteScript and their internal IDs, see the SuiteScript 
 * Reference Guide.
 * 
 * @returns The values of a multiselect field as an Array on the current record.
 * Returns null if the field does not exist on the record or the field is
 * restricted.
 * 
 * @since 2009.1
 */
declare function nlapiGetFieldValues(fldnam: string): string[] | null;

/**
 * Adds a select option to a select/multiselect field added via script. Note
 * that this API can only be used on select/multiselect fields that are added
 * via the 
 * [UI Objects API](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3126890.html)
 * (for example, in Suitelets or beforeLoad user events scripts).
 * 
 * @param fldnam The internalId of the scripted field
 * 
 * @param value A unique value for the select option. Note that the datatype for
 * this argument will vary depending on the value that is set. For example, you
 * may assign numerical values such as 1, 2, 3 or string values such as option1,
 * option2, option3.
 * 
 * @param text The display name of the select option
 * 
 * @param selected If not set, this argument defaults to false. If set to true,
 * the select option becomes the default option.
 */
declare function nlapiInsertSelectOption(
    fldnam: string,
    value: string | number,
    text: string,
    selected?: boolean
): void;

/**
 * Performs a search for one or more **body** fields on a record. This function
 * supports joined-field lookups. Note that the notation for joined fields is:
 * `join_id.field_name`
 * 
 * @param type The record internal ID name. In the NetSuite Help Center, see 
 * [SuiteScript Supported Records](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_N3170023.html).
 * Record IDs are listed in the “Record Internal ID” column.
 * 
 * @param id The internalId for the record, for example 777 or 87.
 * @param fields Sets an array of column/field names to look up, or a single
 * column/field name. The `fields` parameter can also be set to reference joined
 * fields (see the third code sample).
 * 
 * @param text If not set, this argument defaults to false and the internal ID
 * of the dropdown field is returned. If set to true, this argument returns the
 * UI display name for this field or fields (valid only for
 * SELECT|IMAGE|DOCUMENT fields).
 */
declare function nlapiLookupField(
    type: string,
    id: null,
    fields: string | string[],
    text?: boolean
): string | { [key: string]: string };

/**
 * Removes a single select option from a select or multiselect field added via
 * script. Note that this API call can only be used on select/multiselect fields
 * that are added via the 
 * [UI Objects API](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3126890.html)
 * (for example on Suitelets or beforeLoad user event scripts).
 * 
 * @param fldnam The name of the scripted field
 * 
 * @param value The value of the select option to be removed or null to delete
 * all the options
 */
declare function nlapiRemoveSelectOption(fldnam: string, value: string): void;

/**
 * Sets the value of a select field on the current record using the UI display
 * name. This API can be used in user event **beforeLoad** scripts to initialize
 * a field on new records or to initialize a non-stored field.
 * (Non-stored fields are those that have the **Store Value** preference
 * unchecked on the custom field page.)
 * 
 * This function is available in client and user event scripts only.
 * 
 * @param fldname The name of the field being set
 * 
 * @param txt The display name associated with the value that the field is being
 * set to
 * 
 * @param firefieldchanged If true, then the fieldchange script for that field
 * is executed. If no value is provided, this argument defaults to true.
 * (Available in Client SuiteScript only). See Using the Fire Field Changed
 * Parameter for more information.
 * 
 * @param synchronous This parameter is relevant for client SuiteScripts only.
 * In server scripts (such as user event scripts), this parameter will always
 * execute as true.
 */
declare function nlapiSetFieldText(
    fldname: string,
    txt: string,
    firefieldchanged?: boolean,
    synchronous?: boolean
): void;

/**
 * Sets the values of a multi-select field on the current record using the UI
 * display names. This API can be used in user event **beforeLoad** scripts to
 * initialize a field on new records or to initialize a non-stored field.
 * (Non-stored fields are those that have the **Store Value** preference
 * unchecked on the custom field page.)
 * 
 * This function is available in client and user event scripts only.
 * 
 * @param fldname The name of the field being set
 * 
 * @param txts The display names associated with the values that the field is
 * being set to
 * 
 * @param firefieldchanged If true, then the fieldchange script for that field
 * is executed. If no value is provided, this argument defaults to true.
 * (Available in Client SuiteScript only). See Using the Fire Field Changed
 * Parameter for more information.
 * 
 * @param synchronous This parameter is relevant for client SuiteScripts only.
 * In server scripts (such as user event scripts), this parameter will always
 * execute as true.
 * 
 * @since 2009.1
 */
declare function nlapiSetFieldTexts(
    fldname: string,
    txts: string[],
    firefieldchanged?: boolean,
    synchronous?: boolean
): void;

/**
 * Sets the value of a body field. This API can be used in user event 
 * **beforeLoad** scripts to initialize a field on new records or to initialize 
 * a non-stored field. (Non-stored fields are those that have the 
 * **Store Value** preference unchecked on the custom field page.)
 * 
 * For client-side scripting, this API can be triggered by a PageInit client 
 * event trigger.
 * 
 * This API is available in client and user event scripts only.
 * 
 * @param fldnam The internal ID name of the field being set
 * 
 * @param value The value the field is being set to.
 * 
 * @param firefieldchanged If true, then the fieldchange script for that field 
 * is executed. If no value is provided, this argument defaults to true. 
 * (Available in Client SuiteScript only). See Using the 
 * [Fire Field Changed Parameter](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3050839) 
 * for more information.
 * 
 * @param synchronous This parameter is relevant for client SuiteScripts only.
 * In server scripts (such as user event scripts), this parameter will always 
 * execute as true.
 */
declare function nlapiSetFieldValue(
    fldnam: string,
    value: string,
    firefieldchanged?: boolean,
    synchronous?: boolean
): void;

/**
 * Sets the value of a multiselect body field on a current record. This API can
 * be used for user event **beforeLoad** scripts to initialize fields on new
 * records or non-stored fields. (Non-stored fields are those that have the
 * **Store Value** preference unchecked on the custom field page.
 * 
 * For client-side scripting, this API can be triggered by a **PageInit** client
 * event trigger.
 * 
 * This API is available in client and user event scripts only.
 * @param fldnam The internal ID name of the field being set
 * 
 * @param value The value the field is being set to (Array).
 * 
 * @param firefieldchanged If true, then the fieldchange script for that field
 * is executed. If no value is provided, this argument defaults to true.
 * 
 * @param synchronous This parameter is relevant for client SuiteScripts only.
 * In server scripts (such as user event scripts), this parameter will always
 * execute as true.
 * 
 * @since 2009.1
 */
declare function nlapiSetFieldValues(
    fldnam: string,
    value: string,
    firefieldchanged?: boolean,
    synchronous?: boolean
): void;

/**
 * Updates one or more body fields or custom fields on a record. This function
 * can be used on any record that supports inline editing and on any body
 * field or custom field that supports inline editing. Note that this function
 * cannot be used to update sublist “line item” fields.
 * 
 * The nlapiSubmitField function is a companion function to
 * [nlapiLookupField(type, id, fields, text)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3039111.html#bridgehead_N3040351).
 * 
 * `nlapiSubmitField` is available in client, user event, scheduled, portlet,
 * and Suitelet scripts.
 * 
 * See 
 * [SuiteScript 1.0 API Governance](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3350760.html)
 * for the unit cost associated with this API. Note that the metering for this
 * API is on a per-call basis, not per updated line. For example you can update
 * five fields with one call to `nlapiSubmitField`, and the entire operation
 * will cost 10 units (if the API is executing on a standard transaction
 * record).
 * 
 * @param type The record internal ID name of the record you are updating.
 * 
 * @param id The internalId for the record, for example 777 or 87
 * 
 * @param fields An Array of field names being updated -or- a single field name
 * 
 * @param values An Array of field values being updated -or- a single field value
 * 
 * @param doSourcing If not set, this argument defaults to false and field
 * sourcing does not occur. If set to true, sources in dependent field information
 * for empty fields.
 */
declare function nlapiSubmitField(
    type: string,
    id: number,
    fields: string | string[],
    values: string | string[],
    doSourcing?: boolean
): void;

/*
   --------------------------------------------------

           SUBLIST APIS

   --------------------------------------------------
*/

/**
 * Cancels any uncommited changes to the current line of a sublist
 * 
 * @param type The sublist internal ID 
 * (for example, use price as the ID for the Pricing sublist).
 * See [Using the SuiteScript Records Browser](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html)
 * for sublists that support SuiteScript, sublist internal IDs, and sublist 
 * field IDs.
 */
declare function nlapiCancelLineItem(type: string): void;

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
declare function nlapiCommitLineItem(type: string): void;

/**
 * Sets the line item field of a sublist to disabled or enabled based on the
 * value (true or false). This function is only supported in client scripts.
 * 
 * @param type The sublist internal ID (for example, use price as the ID for the
 * Pricing sublist). See Using the SuiteScript Records Browser for sublists that
 * support SuiteScript, sublist internal IDs, and sublist field IDs.
 * 
 * @param fldnam The name of the line item field to enable/disable
 * 
 * @param val If set to true the field is disabled. If set to false it is
 * enabled
 */
declare function nlapiDisableLineItemField(
    type: string,
    fldnam: string,
    val?: boolean
): void;

/**
 * This API returns the line number of a particular price in a column. If the
 * value is present on multiple lines, it will return the line item of the first
 * line that contains the value. This API is supported in client and user event
 * scripts. Use this API on a matrix sublists only.
 * 
 * @param type The sublist internal ID. In the NetSuite Help Center, see
 * [Pricing Sublist Internal IDs]()
 * to determine the correct internal ID of your pricing list.
 * 
 * @param fldnam The internal ID of the matrix field
 * 
 * @param val The value of the field
 * 
 * @param column The column number for this field. Column numbers start at 1,
 * not 0.
 * 
 * @returns The line number (as an integer) of a specified matrix field
 * 
 * @since 2009.2
 */
declare function nlapiFindLineItemMatrixValue(
    type: string,
    fldnam: string,
    val: string,
    column: number
): number;

/**
 * Use this API to find the line number of a specific field in a sublist. This
 * API can be used on any sublists that supports SuiteScript. This API is
 * supported in client and user event scripts only.
 * 
 * @param type The sublist internal ID (for example, use price as the ID for
 * the Pricing sublist). See 
 * [Using the SuiteScript Records Browser]()
 * for sublists that support SuiteScript, sublist internal IDs, and sublist
 * field IDs.
 * 
 * @param fldnam The field internal ID
 * 
 * @param val The value of the field
 * 
 * @returns The line number (as an integer) of a specific sublist field
 * 
 * @since 2009.2
 */
declare function nlapiFindLineItemValue(
    type: string,
    fldnam: string,
    val: string
): number;

/**
 * Returns the line number of the currently selected line in a group.
 * 
 * @param type The sublist internal ID (for example, use price as the ID for the
 * Pricing sublist). See
 * [Using the SuiteScript Records Browser](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html)
 * for sublists that support SuiteScript, sublist internal IDs, and sublist
 * field IDs.
 * 
 * @returns The integer value for the currently selected line number in a
 * sublist
 */
declare function nlapiGetCurrentLineItemIndex(type: string): number;

/**
 * Use this API to get the value of the currently selected matrix field. This
 * API should be used on matrix sublists only. This API is supported in client
 * and user event scripts.
 * 
 * @param type The sublist internal ID. In the NetSuite Help Center, see
 * [Pricing Sublist Internal IDs](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_1502207768.html#bridgehead_N3219953)
 * to determine the correct internal ID of your pricing list.
 * 
 * @param fldnam The internal ID of the matrix field being set.
 * 
 * @param column The column number for this field. Column numbers start at 1,
 * not 0.
 * 
 * @returns The string value of a field on the currently selected line in a
 * matrix sublist. Returns null if the field does not exist.
 * 
 * @since 2009.2
 */
declare function nlapiGetCurrentLineItemMatrixValue(
    type: string,
    fldnam: string,
    column: number
): string;

/**
 * Returns the display name (the UI label) of a select field (based on its
 * current selection) on the currently selected line. Typically used in validate
 * line functions.
 * 
 * @param type The sublist internal ID (for example, use price as the ID for the
 * Pricing sublist). See
 * [Using the SuiteScript Records Browser](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html)
 * for sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
 * 
 * @param fldnam The name of the field being set
 * 
 * @returns The string display name of a select field (based on its current
 * selection) on the currently selected line. Returns null if the field does not
 * exist.
 */
declare function nlapiGetCurrentLineItemText(
    type: string,
    fldnam: string
): string;

/**
 * Returns the values of a multiselect sublist field on the currently selected 
 * line. One example of a multiselect sublist field is the Serial Numbers field 
 * on the Items sublist.
 * 
 * This function is not supported in client SuiteScript. It is meant to be used 
 * in user event scripts.
 * 
 * @param type The sublist internal ID (for example, use price as the ID for the
 * Pricing sublist). See
 * [Using the SuiteScript Records Browser](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html)
 * for sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
 * 
 * @param fldnam The name of the field being set
 * 
 * @returns An array of string values for the multiselect sublist field (on the
 * currently selected line)
 * 
 * @since 2012.1
 */
declare function nlapiGetCurrentLineItemValue(
    type: string,
    fldnam: string
): string;

/**
 * Use this API to determine the number of line items on a sublist. You can then 
 * use APIs such as nlapiInsertLineItem or nlapiRemoveLineItem to add or remove 
 * lines before/after existing lines.
 * 
 * The nlapiGetLineItemCount API is available in Client and User Event scripts 
 * only. If you want to get the line count of a sublist in a Suitelet, see 
 * nlobjSubList.[getLineItemCount()](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3161033.html#bridgehead_N3161941).
 * 
 * @param type The sublist internal ID (for example, use price as the ID for the
 * Pricing sublist). See
 * [Using the SuiteScript Records Browser](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html)
 * for sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
 * 
 * @returns The integer value for the number of lines in a sublist for the
 * current record
 */
declare function nlapiGetLineItemCount(type: string): number;

/**
 * Use this function to obtain sublist (line item) field metadata. Calling this
 * function instantiates the nlobjField object, and you can use all the methods
 * available to nlobjField to get field metadata.
 * 
 * @param type The sublist internal ID (for example, use price as the ID for the
 * Pricing sublist). See
 * [Using the SuiteScript Records Browser](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html)
 * for sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
 * 
 * @param fldnam The internal ID of the sublist field
 * 
 * @param linenum The line number for this field. Note the first line number on
 * a sublist is **1** (not 0).
 * 
 * @returns An nlobjField object representing this line item field
 * 
 * @since 2009.1
 */
declare function nlapiGetLineItemField(
    type: string,
    fldnam: string,
    linenum: number
): nlobjField;

/**
 * Use this API to obtain metadata for a field that appears in a matrix sublist.
 * This API is supported in client and user event scripts.
 * 
 * Calling this function instantiates the 
 * [nlobjField](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3140379.html)
 * object, and you can use all the methods available to the `nlobjField` object.
 * 
 * @param type The sublist internal ID. In the NetSuite Help Center, see 
 * [Pricing Sublist Internal IDs]()
 * to determine the correct internal ID of your pricing list.
 * 
 * @param fldnam The internal ID of the field (line) whose value you want
 * returned.
 * 
 * @param linenum The line number for this field. Note the first line number on
 * a sublist is 1 (not 0).
 * 
 * @param column The column number for this field. Column numbers start at 1,
 * not 0.
 * 
 * @returns An nlobjField object representing this sublist field. Returns null
 * if the field you have specified does not exist.
 * 
 * @since 2009.2
 */
declare function nlapiGetLineItemMatrixField(
    type: string,
    fldnam: string,
    linenum: number,
    column: number
): nlobjField | null;

/**
 * Use this API to get the value of a matrix field that appears on a specific
 * line in a specific column. This API can be used only in the context of a
 * matrix sublist. This API is supported in client and user event scripts.
 * 
 * @param type The sublist internal ID. In the NetSuite Help Center, see
 * [Pricing Sublist Internal IDs](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_1502207768.html#bridgehead_N3219953)
 * to determine the correct internal ID of your pricing list.
 * 
 * @param fldnam The internal ID of the matrix field whose value you want
 * returned.
 * 
 * @param linenum The line number for this field. Note the first line number on
 * a sublist is 1 (not 0).
 * 
 * @param column The column number for this field. Column numbers start at 1
 * (not 0).
 * 
 * @returns The string value of the matrix field.
 * 
 * @since 2009.2
 */
declare function nlapiGetLineItemMatrixValue(
    type: string,
    fldnam: string,
    linenum: number,
    column: number
): string;

/**
 * Returns the display name of a select field (based on its current selection)
 * in a sublist.
 * 
 * @param type The sublist internal ID (for example, use price as the ID for the
 * Pricing sublist). See Using the
 * [SuiteScript Records Browser](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html)
 * for sublists that support SuiteScript, sublist internal IDs, and sublist
 * field IDs.
 * 
 * @param fldnam The name of the field being set
 * 
 * @param linenum The line number for this field. Note the first line number on
 * a sublist is 1 (not 0).
 * 
 * @returns The string value of the display name of a select field (based on its
 * current selection) in a sublist. Returns null if field does not exist on the
 * record or the field is restricted.
 */
declare function nlapiGetLineItemText(
    type: string,
    fldnam: string,
    linenum: number
): string | null;

/**
 * Available only in client and user event SuiteScripts. Note that you cannot
 * set default line item values when the line is not in edit mode.
 * 
 * Also, NetSuite recommends that you read the topic 
 * [Getting Field Values in SuiteScript](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N2945065.html#bridgehead_N2945106),
 * which addresses the rare instances in which the value returned by this API is
 * inconsistent.
 * 
 * @param type The sublist internal ID (for example, use price as the ID for the
 * Pricing sublist). See Using the
 * [SuiteScript Records Browser](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html)
 * for sublists that support SuiteScript, sublist internal IDs, and sublist
 * field IDs.
 * 
 * @param fldnam The internal ID of the field (line item) whose value is being 
 * returned
 * 
 * @param linenum The line number for this field. Note the first line number on 
 * a sublist is 1 (not 0).
 * 
 * @returns The string value of a sublist line item
 */
declare function nlapiGetLineItemValue(
    type: string,
    fldnam: string,
    linenum: number
): string;

/**
 * Returns the values of a multiselect sublist field on a selected line. One
 * example of a multiselect sublist field is the Serial Numbers field on the
 * Items sublist.
 * 
 * This function is not supported in client SuiteScript. It is meant to be used
 * in user event scripts.
 * 
 * @param type The sublist internal ID (for example, use price as the ID for the
 * Pricing sublist). See 
 * [Using the SuiteScript Records Browser](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html)
 * for sublists that support SuiteScript, sublist internal IDs, and sublist
 * field IDs.
 * 
 * @param fldname The internal ID of the multiselect field
 * 
 * @param linenum The line number for this field. Note the first line number on
 * a sublist is 1 (not 0).
 * 
 * @returns An array of string values for the multiselect sublist field
 * 
 * @sinze 2012.1
 */
declare function nlapiGetLineItemValues(
    type: string,
    fldname: string,
    linenum: number
): string[];

/**
 * Use this API in a matrix sublist to get the number of columns for a specific
 * matrix field. This API is supported in client and user event scripts.
 * 
 * @param type The sublist internal ID. In the NetSuite Help Center, see 
 * [Pricing Sublist Internal IDs](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_1502207768.html#bridgehead_N3219953)
 * to determine the correct internal ID of your pricing list.
 * 
 * @param fldnam The field internal ID of the matrix field.
 * 
 * @returns The integer value for the number of columns of a specified matrix
 * field
 * 
 * @since 2009.2
 */
declare function nlapiGetMatrixCount(
    type: string,
    fldnam: string
): number;

/**
 * Use this API to get field metadata for a matrix “header” field in a matrix
 * sublist.
 * 
 * @param type The sublist internal ID. In the NetSuite Help Center, see
 * [Pricing Sublist Internal IDs](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_1502207768.html#bridgehead_N3219953)
 * to determine the correct internal ID of your pricing list.
 * 
 * @param fldnam The internal ID of the matrix header field.
 * 
 * @param column The column number for this field. Column numbers start at 1
 * (not 0).
 * 
 * @since 2009.2
 */
declare function nlapiGetMatrixField(
    type: string,
    fldnam: string,
    column: number
): nlobjField;

/**
 * Use this API to get the value of a matrix “header” field in a matrix sublist.
 * 
 * This API is supported in client and user event scripts.
 * 
 * @param type The sublist internal ID. In the NetSuite Help Center, see 
 * [Pricing Sublist Internal IDs](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_1502207768.html#bridgehead_N3219953)
 * to determine the correct internal ID of your pricing list.
 * 
 * @param fldnam The internal ID of the matrix header field.
 * 
 * @param column The column number for this field. Column numbers start at 1
 * (not 0).
 * 
 * @returns The integer value of a matrix header field. For example, on the
 * Pricing sublist the value of a specified quantity level (Qty) field is
 * returned.
 * 
 * @since 2009.2
 */
declare function nlapiGetMatrixValue(
    type: string,
    fldnam: string,
    column: number
): number;

/**
 * Inserts a line above the currently selected line in a sublist. Available to
 * client and user event scripts only.
 * 
 * @param type The sublist internal ID (for example, use price as the ID for the
 * Pricing sublist). See 
 * [Using the SuiteScript Records Browser](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html)
 * for sublists that support SuiteScript, sublist internal IDs, and sublist
 * field IDs.
 * 
 * @param line The line number in which to insert new line. Note the first line
 * number on a sublist is 1 (not 0).
 */
declare function nlapiInsertLineItem(type: string, line: number): void;

/**
 * Adds a select option to a select/multiselect field that was added through
 * scripting. This field will appear as a line item on a sublist.
 * 
 * Note that this API can only be used on select/multiselect fields that are
 * added via the 
 * [UI Objects API](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3126890.html)
 * (for example on Suitelets or beforeLoad user events).
 * 
 * For performance reasons, you should disable the dropdown list before adding
 * multiple options, then enable the dropdown list when finished.
 * 
 * @param type The sublist internal ID (for example, use price as the ID for the
 * Pricing sublist). See 
 * [Using the SuiteScript Records Browser](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html)
 * for sublists that support SuiteScript, sublist internal IDs, and sublist field
 * IDs.
 * 
 * @param fldnam The name of the scripted field
 * 
 * @param value A unique value for the select option. Note that the datatype for
 * this argument will vary depending on the value that is set. For example, you
 * may assign numerical values such as 1, 2, 3 or string values such as option1,
 * option2, option3.
 * 
 * @param text The display name of the select option
 * 
 * @param selected If not set, this argument defaults to false. If set to true,
 * the selected option will become the default selection.
 */
declare function nlapiInsertLineItemOption(
    type: string,
    fldnam: string,
    value: string | number,
    text: string,
    selected?: boolean
): void;

/**
 * Determines whether any changes have been made to a sublist.
 * 
 * This API can only be used in client scripts.
 * 
 * @param type The sublist internal ID (for example, use price as the ID for the
 * Pricing sublist). See 
 * [Using the SuiteScript Records Browser](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html)
 * for sublists that support SuiteScript, sublist internal IDs, and sublist
 * field IDs.
 * 
 * @returns Returns true if the currently selected line of the sublist has been
 * edited
 */
declare function nlapiIsLineItemChanged(type: string): boolean;

/**
 * Makes a server call to refresh staticlist (read-only) sublists. For
 * inlineeditor or editor sublists, it simply redraws the sublist. This API does
 * not do anything for sublists of type list.
 * 
 * @param type The sublist internal ID (for example, use price as the ID for the
 * Pricing sublist). See 
 * [Using the SuiteScript Records Browser](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html)
 * for sublists that support SuiteScript, sublist internal IDs, and sublist
 * field IDs.
 */
declare function nlapiRefreshLineItems(type: string): void;

/**
 * Removes the currently selected line in a sublist. Supported in client scripts,
 * user event scripts, and Suitelets.
 * 
 * @param type The sublist internal ID (for example, use price as the ID for the
 * Pricing sublist). See 
 * [Using the SuiteScript Records Browser](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html)
 * for sublists that support SuiteScript, sublist internal IDs, and sublist
 * field IDs.
 * 
 * @param line The line number you want to remove. Note the first line number on
 * a sublist is 1 (not 0).
 */
declare function nlapiRemoveLineItem(type: string, line: number): void;

/**
 * Removes a single select option from a select or multiselect line item field
 * added through a script
 * 
 * @param type The sublist internal ID (for example, use price as the ID for the
 * Pricing sublist). See 
 * [Using the SuiteScript Records Browser](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html)
 * for sublists that support SuiteScript, sublist internal IDs, and sublist
 * field IDs.
 * 
 * @param fldnam The name of the scripted field.
 * 
 * @param value The value of the select option to be removed or null to delete
 * all the options.
 */
declare function nlapiRemoveLineItemOption(
    type: string,
    fldnam: string,
    value: string
): void;

/**
 * Selects an existing line in a sublist
 * 
 * @param type The sublist internal ID (for example, use price as the ID for the
 * Pricing sublist). See 
 * [Using the SuiteScript Records Browser](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html)
 * for sublists that support SuiteScript, sublist internal IDs, and sublist
 * field IDs.
 * 
 * @param linenum The line number to select. Note the first line number on a
 * sublist is 1 (not 0).
 */
declare function nlapiSelectLineItem(type: string, linenum: number): void;

/**
 * Use this function if you want to set a value on a sublist line that does not
 * currently exist. This API is the UI equivalent of clicking a sublist tab (for
 * example the Items sublist tab) so that you can then add a new line (or item,
 * in this example) to the sublist.
 * 
 * @param type The sublist internal ID (for example, use price as the ID for the
 * Pricing sublist). See 
 * [Using the SuiteScript Records Browser](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html)
 * for sublists that support SuiteScript, sublist internal IDs, and sublist
 * field IDs.
 */
declare function nlapiSelectNewLineItem(type: string): void;

/**
 * This API is typically used in validate line functions to set the value of a
 * matrix sublist field before it has been added to the form. This API is
 * supported in client and user event scripts. Also note that it should be used
 * on matrix sublists only.
 * 
 * @param type The sublist internal ID. In the NetSuite Help Center, see 
 * [Pricing Sublist Internal IDs](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_1502207768.html#bridgehead_N3219953)
 * to determine the correct internal ID of your pricing list.
 * 
 * @param fldnam The internal ID of the matrix field.
 * 
 * @param column The column number for this field. Column numbers start at 1
 * (not 0).
 * 
 * @param value The value the field is being set to.
 * 
 * @param firefieldchanged If true, then the field change script for that field
 * is executed. If no value is provided, this argument defaults to true.
 * (Available in Client SuiteScript only). See Using the 
 * [Fire Field Changed Parameter](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3050839) 
 * for more information.
 * 
 * @param synchronous This parameter is relevant for client SuiteScripts only.
 * In server scripts (such as user event scripts), this parameter will always
 * execute as true.
 * 
 * @since 2009.2
 */
declare function nlapiSetCurrentLineItemMatrixValue(
    type: string,
    fldnam: string,
    column: number,
    value: string | number,
    firefieldchanged?: boolean,
    synchronous?: boolean
): void;

/**
 * Sets the value of a select field on the currently selected line using the
 * display name. See also, Using the 
 * [Fire Field Changed Parameter](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3050839).
 *
 *  @param type The sublist internal ID. In the NetSuite Help Center, see 
 * [Pricing Sublist Internal IDs](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_1502207768.html#bridgehead_N3219953)
 * to determine the correct internal ID of your pricing list.
 * 
 * @param fldnam The name of the field being set
 * 
 * @param text The display name associated with the value that the field is
 * being set to
 * 
 * @param firefieldchanged If true, then the field change script for that field
 * is executed. If no value is provided, this argument defaults to true.
 * (Available in Client SuiteScript only). See Using the 
 * [Fire Field Changed Parameter](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3050839) 
 * for more information.
 * 
 * @param synchronous This parameter is relevant for client SuiteScripts only.
 * In server scripts (such as user event scripts), this parameter will always
 * execute as true.
 */
declare function nlapiSetCurrentLineItemText(
    type: string,
    fldnam: string,
    text: string,
    firefieldchanged?: boolean,
    synchronous?: boolean
): void;

/**
 * Sets the value of the line-item field before it has been added to the form.
 * Typically used in validate line functions. See also, Using the Fire Field
 * Changed Parameter.
 * 
 *  @param type The sublist internal ID. In the NetSuite Help Center, see 
 * [Pricing Sublist Internal IDs](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_1502207768.html#bridgehead_N3219953)
 * to determine the correct internal ID of your pricing list.
 * 
 * @param fldnam The name of the field being set
 * 
 * @param value The value the field is being set to.
 * 
 * @param firefieldchanged If true, then the field change script for that field
 * is executed. If no value is provided, this argument defaults to true.
 * (Available in Client SuiteScript only). See Using the 
 * [Fire Field Changed Parameter](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3050839) 
 * for more information.
 * 
 * @param synchronous This parameter is relevant for client SuiteScripts only.
 * In server scripts (such as user event scripts), this parameter will always
 * execute as true.
 */
declare function nlapiSetCurrentLineItemValue(
    type: string,
    fldnam: string,
    value: string,
    firefieldchanged?: boolean,
    synchronous?: boolean
): void;

/**
 * Sets the values for a multi-select sublist field. Note that like any other 
 * “set field” APIs, the values you use will be internal ID values. For example, 
 * rather than specifying 'Abe Simpson' as a customer value, you will use 232 or 
 * 88 or whatever the internal ID is for customer Abe Simpson.
 * 
 * However, if you are using this API to set the serialnumber field on the Item 
 * sublist, you will set the text string of the actual serial number, for 
 * example 'serialnum1', 'serialnum2', and so on.
 * 
 * This API is supported in client scripts only.
 * 
 *  @param type The sublist internal ID. In the NetSuite Help Center, see 
 * [Pricing Sublist Internal IDs](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_1502207768.html#bridgehead_N3219953)
 * to determine the correct internal ID of your pricing list.
 * 
 * @param fldnam The name of the multi-select sublist field being set.
 * 
 * @param values The values for the field.
 * 
 * @param firefieldchanged If true, then the field change script for that field
 * is executed. If no value is provided, this argument defaults to true.
 * (Available in Client SuiteScript only). See Using the 
 * [Fire Field Changed Parameter](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3050839) 
 * for more information.
 * 
 * @param synchronous This parameter is relevant for client SuiteScripts only.
 * In server scripts (such as user event scripts), this parameter will always
 * execute as true.
 * 
 * @since 2012.1
 */
declare function nlapiSetCurrentLineItemValues(
    type: string,
    fldnam: string,
    values: any[],
    firefieldchanged?: boolean,
    synchronous?: boolean
): void;

/**
 * Sets the value of a sublist field on the current, **new** record. This API
 * can be used in beforeLoad user event scripts to initialize sublist line
 * items, but only on **new** records and only on non-stored sublist fields. If
 * you execute this API on an existing record, nothing will happen.
 * 
 * Note that this API is supported in **user event scripts** only.
 * 
 * This function can be used in client SuiteScript, but note that **it is
 * supported only on custom fields and the Description field**. If you use this
 * function to set the value of a standard, built-in line item field, the
 * function will not execute.
 * 
 *  @param type The sublist internal ID. In the NetSuite Help Center, see 
 * [Pricing Sublist Internal IDs](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_1502207768.html#bridgehead_N3219953)
 * to determine the correct internal ID of your pricing list.
 * 
 * @param fldnam The name of the field being set
 * 
 * @param linenum The line number for this field. Note the first line number on
 * a sublist is 1 (not 0).
 * 
 * @param value The value the field is being set to
 */
declare function nlapiSetLineItemValue(
    type: string,
    fldnam: string,
    linenum: number,
    value: string
): void;

/**
 * This API is used to set a header field in a matrix sublist. This API is
 * supported in client and user event scripts. It is typically used in pageInit
 * (client) and beforeLoad (user event) events. Also note that this API should
 * be used on matrix sublists only.
 * 
 *  @param type The sublist internal ID. In the NetSuite Help Center, see 
 * [Pricing Sublist Internal IDs](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_1502207768.html#bridgehead_N3219953)
 * to determine the correct internal ID of your pricing list.
 * 
 * @param fldnam The name of the field being set.
 * 
 * @param column The value the field is being set to.
 * @param value The column number for this field. Column numbers start at 1
 * (not 0).
 * 
 * @param firefieldchanged If true, then the field change script for that field
 * is executed. If no value is provided, this argument defaults to true.
 * 
 * @param synchronous This parameter is relevant for client SuiteScripts only.
 * In server scripts (such as user event scripts), this parameter will always
 * execute as true.
 * 
 * @since 2009.2
 */
declare function nlapiSetMatrixValue(
    type: string,
    fldnam: string,
    column: number,
    value: string,
    firefieldchanged?: boolean,
    synchronous?: boolean
): void;

/*
   --------------------------------------------------

           SEARCH APIS

   --------------------------------------------------
*/

/**
 * Creates a new search. The search can be modified and run as an on demand
 * search, without saving it. Alternatively, calling nlobjSearch.
 * [saveSearch(title, scriptId)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3111947.html#bridgehead_N3114333)
 * will save the search to the database, so it can be resused later in the UI or
 * using [nlapiLoadSearch(type, id)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3051062.html#bridgehead_N3051604).
 * 
 * @param type The record internal ID of the record type you are searching (for
 * example, customer|lead|prospect|partner|vendor|contact). For a list of
 * internal IDs, in the NetSuite Help Center see 
 * [SuiteScript Supported Records](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_N3170023.html).
 * 
 * @param filters A single
 * [nlobjSearchFilter](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3120682.html)
 * object - or - an array of
 * [nlobjSearchFilter](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3120682.html)
 * objects - or - a search filter expression.
 * 
 * @param columns A single 
 * [nlobjSearchColumn(name, join, summary)]()
 * object - or - an array of 
 * [nlobjSearchColumn(name, join, summary)]()
 * objects. Note that you can further filter the returned 
 * [nlobjSearch]()
 * object by passing additional search return column values. You will do this
 * using the nlobjSearch.
 * [setColumns(columns)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3111947.html#bridgehead_N3114539)
 * method.
 * 
 * @since 2012.1
 */
declare function nlapiCreateSearch(
    type: string,
    filters?: nlobjSearchFilter | nlobjSearchFilter[] | any[],
    columns?: nlobjSearchColumn | nlobjSearchColumn[]
): nlobjSearch;

/**
 * Loads an existing saved search. The saved search could have been created
 * using the UI, or created using 
 * [nlapiCreateSearch(type, filters, columns)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3051062.html#bridgehead_N3051237)
 * in conjunction with nlobjSearch.
 * [saveSearch(title, scriptId)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3111947.html#bridgehead_N3114333).
 * 
 * Executing this API consumes 5 governance units.
 * 
 * @param type The record internal ID of the record type you are searching (for
 * example, customer|lead|prospect|partner|vendor|contact). This parameter is
 * case-insensitive. For a list of internal IDs, in the NetSuite Help Center see
 * [SuiteScript Supported Records](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_N3170023.html).
 * 
 * @param id The internal ID or script ID of the saved search. The script ID of
 * the saved search is required, regardless of whether you specify the search
 * type. If you do not specify the search type, you must set type to **null**
 * and then set the script/search ID. See 
 * [Example 3](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3051062.html#bridgehead_N3051782)
 * for more details
 * 
 * @since 2012.1
 */
declare function nlapiLoadSearch(type: string, id: string): nlobjSearch;

/**
 * Performs a search for duplicate records based on the account's Duplicate
 * Detection configuration. Note that this API only works for records that
 * support duplicate record detection. These records include customers, leads, 
 * prospects, contacts, partners, and vendors.
 * 
 * This API is supported in client, user event, scheduled, portlet, and Suitelet
 * scripts.
 * 
 * @param type The record internal ID name you are checking duplicates for (for
 * example, customer|lead|prospect|partner|vendor|contact). In the NetSuite Help
 * Center, see
 * [SuiteScript Supported Records](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_N3170023.html).
 * 
 * @param fields The internal ID names of the fields used to detect duplicate
 * (for example, companyname|email|name|phone|address1|city|state|zipcode).
 * Depending on the use case, fields may or may not be a required argument. If
 * you are searching for duplicates based on the fields that appear on a certain
 * record type, fields would be a **required** argument. If you are searching
 * for the duplicate of a specific record (of a specifed type), you would set id
 * and not set fields.
 * 
 * @param id internalId of existing record. Depending on the use case, id may or
 * may not be a required argument. If you are searching for a specific record of
 * a specified type, you must set id. If you are searching for duplicates based
 * on field names, you will not set id ; you will set `fields`.
 * 
 * @returns An Array of 
 * [nlobjSearchResult](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3123296.html)
 * objects corresponding to the duplicate records.
 */
declare function nlapiSearchDuplicate(
    type: string,
    fields: string[],
    id: number
): nlobjSearchResult[];

/**
 * erforms a global search against a single keyword or multiple keywords.
 * 
 * This API is supported in client, user event, scheduled, portlet, and Suitelet
 * scripts. Usage metering allowed for nlapiSearchGlobal is 10 units.
 * 
 * @param keywords Global search keywords string or expression
 */
declare function nlapiSearchGlobal(keywords: string): nlobjSearchResult[];

/**
 * Performs a search using a set of criteria (your search filters) and columns
 * (the results). Alternatively, you can use this API to execute an existing
 * saved search. Results are limited to 1000 rows.
 * 
 * Usage metering allowed for nlapiSearchRecord is 10 units.
 * 
 * @param type The record internal ID of the record type you are searching. For 
 * a list of internal IDs, in the NetSuite Help Center see
 * [SuiteScript Supported Records](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_N3170023.html).
 * 
 * @param id The internalId or custom scriptId for the saved search. To obtain
 * the internalId, go to Lists > Search > Saved Searches (Administrator). The
 * internalId appears in the Internal ID column. If you have created a custom
 * scriptId when building your search, this ID will appear in the ID column.
 * 
 * @param filters A single 
 * [nlobjSearchFilter](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3120682.html) object - or - an array of 
 * [nlobjSearchFilter](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3120682.html) objects - or - a search filter expression.
 * 
 * @param columns A single 
 * [nlobjSearchColumn(name, join, summary)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3117719.html)
 * object - or - an array of 
 * [nlobjSearchColumn(name, join, summary)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3117719.html)
 * objects. Note that you can further filter the returned saved search by
 * passing additional search return column values.
 * 
 * @returns An array of 
 * [nlobjSearchResult](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3123296.html)
 * objects corresponding to the searched records.
 * 
 * @throws SSS_INVALID_RECORD_TYPE
 * 
 * @throws SSS_TYPE_ARG_REQD
 * 
 * @throws SSS_INVALID_SRCH_ID
 * 
 * @throws SSS_INVALID_SRCH_FILTER
 * 
 * @throws SSS_INVALID_SRCH_FILTER_JOIN
 * 
 * @throws SSS_INVALID_SRCH_OPERATOR
 * 
 * @throws SSS_INVALID_SRCH_COL_NAME
 * 
 * @throws SSS_INVALID_SRCH_COL_JOIN
 * 
 * @throws SSS_INVALID_SRCH_FILTER_EXPR
 * 
 * @throws SSS_INVALID_SRCH_FILTER_EXPR_DANGLING_OP
 * 
 * @throws SSS_INVALID_SRCH_FILTER_EXPR_OBJ_TYPE
 * 
 * @throws SSS_INVALID_SRCH_FILTER_EXPR_PAREN_DEPTH
 * 
 * @throws SSS_INVALID_SRCH_FILTER_LIST_PARENS
 * 
 * @throws SSS_INVALID_SRCH_FILTER_LIST_TERM
 */
declare function nlapiSearchRecord(
    type?: string,
    id?: number | string,
    filters?: nlobjSearchFilter | nlobjSearchFilter[] | any[],
    columns?: nlobjSearchColumn | nlobjSearchColumn[]
): nlobjSearchResult[];

/**
 * Primary object used to encapsulate search filters
 */
declare class nlobjSearchFilter {
    /**
     * Constructor for a search filter object
     * 
     * @param name The internal ID of the search field. For example, if one of
     * your filtering criterion is Quantity Available, you will set the value of
     * name to quantityavailable, which is the search field ID for Quantity
     * Available.
     * 
     * @param join If you are executing a joined search, the join id used for
     * the search field specified in the name parameter. The join id is the
     * internal ID of the record type the search field appears on.
     * 
     * @param operator The search operator used for this search field. For more
     * information about possible operator values, see 
     * [Search Operators](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3005172.html).
     * 
     * @param value1 A filter value -or- A special date field value -or- Array
     * of values for select/multiselect fields -or- An integer value
     * 
     * @param value2 A secondary filter value -or- special date field value for
     * between/within style operators * lastbusinessweek. Values are not case
     * sensitive. For more information about possible date filter values, see
     * [Search Date Filters](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3010842.html).
     * 
     * @since 2007.1
     */
    constructor(
        name: string,
        join: string,
        operator: SearchOperators,
        value1: SearchDateFilters | Date | SearchDateFilters[] | number,
        value2?: SearchDateFilters | Date
    )

    /**
     * Returns the formula used for this filter
     * 
     * @returns The formula used for this filter
     * 
     * @since 2011.1
     */
    getFormula(): string;

    /**
     * Returns the join id for this search filter
     * 
     * @returns The string value of the search join
     * 
     * @since 2008.1
     */
    getJoin(): string;

    /**
     * Returns the name for this search filter
     * 
     * @returns The string value of the search filter
     * 
     * @since 2007.0
     */
    getName(): string;

    /**
     * Returns the summary type used for this filter
     * 
     * @returns The summary type used for this filter
     * 
     * @since 2011.1
     */
    getSummaryType(): string;

    /**
     * Returns the filter operator that was used
     * 
     * @since 2008.2
     */
    getOperator(): string;

    /**
     * Sets the formula used for this filter. Name of the filter can either be
     * `formulatext`, `formulanumeric`, `formuladatetime`, `formulapercent`, or 
     * `formulacurrency`.
     * 
     * @param formula The formula used for this filter
     * 
     * @since 2011.1
     */
    setFormula(formula: string): nlobjSearchFilter;

    /**
     * Sets the summary type used for this filter. Filter name must correspond
     * to a search column if it is to be used as a summary filter.
     * 
     * @param type The summary type used for this filter
     * 
     * @since 2011.1
     */
    setSummaryType(
        type: 'max' | 'min' | 'avg' | 'sum' | 'count'
    ): nlobjSearchFilter;
}

/**
 * Primary object used to encapsulate a NetSuite saved search. Note, however,
 * you are **not required** to save the search results returned in this object.
 * 
 * A reference to nlobjSearch is returned by 
 * [nlapiCreateSearch(type, filters, columns)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3051062.html#bridgehead_N3051237)
 * and
 * [nlapiLoadSearch(type, id)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3051062.html#bridgehead_N3051604).
 * If you are creating a new search using nlapiCreateSearch, the search will not
 * be saved until you call nlobjSearch.saveSearch(title, scriptId).
 * 
 * After you have saved the search, you can get properties of the search or
 * redefine the search by loading the search with 
 * [nlapiLoadSearch(type, id)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3051062.html#bridgehead_N3051604)
 * and calling various methods on the nlobjSearch object. You can also do this
 * for searches created in the UI.
 * 
 * By default, the search returned by nlapiCreateSearch will be private, which
 * follows the saved search model in the UI. To make a search public, you must
 * call nlobjSearch.
 * [setIsPublic(type)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3111947.html#bridgehead_N3115056) 
 * before saving it.
 */
declare interface nlobjSearch {

    /**
     * Adds a single return column to the search. Note that existing columns on
     * the search are not changed.
     * 
     * @param column The `nlobjSearchColumn` you want added to the search.
     * 
     * @since 2012.1
     */
    addColumn(column: nlobjSearchColumn): void;

    /**
     * Adds multiple return columns to the search. Note that existing columns on
     * the search are not changed.
     * 
     * @param columns The `nlobjSearchColumn[]` you want added to the search.
     * 
     * @since 2012.1
     */
    addColumns(columns: nlobjSearchColumn[]): void;

    /**
     * Adds a single search filter. Note that existing filters on the search
     * are not changed.
     * 
     * @param filter The `nlobjSearchFilter` you want added to the search.
     * 
     * @since 2012.1
     */
    addFilter(filter: nlobjSearchFilter): void;

    /**
     * Adds a search filter list. Note that existing filters on the search are 
     * not changed.
     * 
     * @param filters The list (array) of zero or more `nlobjSearchFilter` you
     * want added to the search.
     * 
     * @since 2012.1
     */
    addFilters(filters: nlobjSearchFilter[]): void;

    /**
     * Deletes a saved search that was created through scripting or through the
     * UI.
     * 
     * If you have created a saved search through the UI, you can load the
     * search using 
     * [nlapiLoadSearch(type, id)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3051062.html#bridgehead_N3051604)
     * and then call `deleteSearch` to delete it.
     * 
     * In scripting if you have created a search using 
     * [nlapiCreateSearch(type, filters, columns)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3051062.html#bridgehead_N3051237)
     * and saved the search using the nlobjSearch
     * [.saveSearch(title, scriptId)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3111947.html#bridgehead_N3114333),
     * you can then load the search and call deleteSearch to delete it.
     * 
     * @since 2012.1
     */
    deleteSearch(): void;

    /**
     * Gets the search return columns for the search.
     * 
     * @since 2012.1
     */
    getColumns(): nlobjSearchColumn[];

    /**
     * Gets the filter expression for the search.
     * 
     * @since 2012.2
     */
    getFilterExpression(): any[];

    /**
     * Gets the filters for the search.
     * 
     * @since 2012.1
     */
    getFilters(): nlobjSearchFilter[];

    /**
     * Gets the internal ID of the search. The internal ID is available only
     * when the search is either loaded using
     * [nlapiLoadSearch(type, id)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3051062.html#bridgehead_N3051604)
     * or has been saved using nlobjSearch.
     * [saveSearch(title, scriptId)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3111947.html#bridgehead_N3114333).
     * 
     * If this is an on demand search (created with 
     * [nlapiCreateSearch(type, filters, columns)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3051062.html#bridgehead_N3051237)), 
     * this method will return null.
     * 
     * @returns The search ID as a string. Typical return values will be
     * something like 55 or 234 or 87. You will not receive a value such as 
     * `customsearch_mysearch`. Any ID prefixed with customsearch is considered
     * a script ID, not the search's internal system ID.
     * 
     * @since 2012.1
     */
    getId(): string | null;

    /**
     * Gets whether the nlobjSearch has been set as public search.
     * 
     * @returns Returns true if the search is public. Returns false if it is
     * not.
     * 
     * @since 2012.1
     */
    getIsPublic(): boolean;

    /**
     * Gets the script ID of the search. The script ID is available only when
     * the search is either loaded using
     * [nlapiLoadSearch(type, id)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3051062.html#bridgehead_N3051604)
     * or has been saved using nlobjSearch.
     * [saveSearch(title, scriptId)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3111947.html#bridgehead_N3114333).
     * 
     * If this is an on demand search (created with 
     * [nlapiCreateSearch(type, filters, columns)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3051062.html#bridgehead_N3051237)
     * ), this method will return null.
     * 
     * @returns The script ID of the search as a string. Typical return values
     * will be something like `customsearch_mysearch` or 
     * `customsearchnewinvoices`. You will not receive values such as 55 or 234
     * or 87. These are considered internal system IDs assigned by NetSuite
     * when you first save the search.
     * 
     * @since 2012.1
     */
    getScriptId(): string;

    /**
     * Returns the record type that the search was based on. This method is
     * helpful when you have the internal ID of the search, but do not know the
     * record type the search was based on.
     * 
     * @returns The internal ID name of the record type as a string. For
     * example, if the search was on a Customer record, customer will be
     * returned; if the search was on the Sales Order record type, `salesorder`
     * will be returned.
     * 
     * @since 2012.1
     */
    getSearchType(): string;

    /**
     * Runs an on demand search, returning the results. Be aware that calling
     * this method does NOT save the search. Using this method in conjunction
     * with 
     * [nlapiCreateSearch(type, filters, columns)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3051062.html#bridgehead_N3051237)
     * supports creating and running on demand searches that are never saved to
     * the database, much like `nlapiSearchRecord`.
     * 
     * Note that this method returns the 
     * [nlobjSearchResultSet](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3124405.html)
     * object, which provides you with more flexibility when working with or
     * iterating through your search results. Therefore, you may also want to
     * use runSearch in conjunction with nlapiLoadSearch. By doing so you can
     * load an existing saved search, call runSearch, and then (if you choose):
     * 
     * - retrieve a slice of the search results from anywhere in the result list
     * 
     * - paginate through the search results.
     * 
     * @since 2012.1
     */
    runSearch(): nlobjSearchResultSet;

    /**
     * Saves the search created by
     * [nlapiCreateSearch(type, filters, columns)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3051062.html#bridgehead_N3051237).
     * 
     * Executing this API consumes 5 governance units.
     * 
     * @param title The title you want to give the saved search. Note that
     * title is required when saving a new search, but optional when saving a
     * search that was loaded using 
     * [nlapiLoadSearch(type, id)]()
     * or has already been saved by calling saveSearch(title, scriptId) before.
     * 
     * @param scriptId The script ID you want to assign to the saved search. All
     * saved search script IDs must be prefixed with **customsearch**
     * 
     * @returns The internal ID of the search as a number.
     * 
     * @since 2012.1
     */
    saveSearch(title?: string, scriptId?: string): number

    /**
     * Sets the return columns for this search, overwriting any prior columns.
     * If null is passed in it is treated as if it were an empty array and
     * removes any existing columns on the search.
     * 
     * @param columns The nlobjSearchColumn[] you want to set in the search.
     * Passing in null or [] removes all columns from the search.
     * 
     * @since 2012.1
     */
    setColumns(columns: nlobjSearchColumn[]): void;

    /**
     * 
     * @param filterExpression The filter expression you want to set in the
     * search. Passing in null or [] removes all filters from the search.
     * 
     * A search filter expression is a JavaScript string array of zero or more
     * elements. Each element is one of the following:
     * 
     * - Operator - either ‘NOT', ‘AND', or ‘OR'
     * 
     * - Filter term
     * 
     * - Nested search filter expression
     * 
     * For more information about search filter expression, see
     * [Search Filter Expression Overview](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3111947.html#bridgehead_N3115497).
     * 
     * @since 2012.2
     */
    setFilterExpression(filterExpression: any[]): void;

    /**
     * Sets the filters for this search, overwriting any prior filters. If null
     * is passed in it is treated as if it were an empty array and removes any
     * existing filters on this search.
     * 
     * @param filters The `nlobjSearchFilter`[] you want to set in the search.
     * Passing in null or [] removes all filters from the search.
     * 
     * @since 2012.1
     */
    setFilters(filters: nlobjSearchFilter[]): void;

    /**
     * Sets whether the search is public or private. By default, all searches
     * created through 
     * [nlapiCreateSearch(type, filters, columns)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3051062.html#bridgehead_N3051237)
     * are private.
     * 
     * @param type Set to true to designate the search as a public search. Set
     * to false to designate the search as a private search.
     * 
     * @since 2012.1
     */
    setIsPublic(type: boolean): void;

    /**
     * Acts like 
     * [nlapiSetRedirectURL(type, identifier, id, editmode, parameters)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3059035.html#bridgehead_N3060274) 
     * but redirects end users to a populated search definition page. You can use
     * this method with any kind of search that is held in the nlobjSearch
     * object. This could be:
     * 
     * - an existing saved search,
     * 
     * - an on demand search that you are building in SuiteScript, or
     * 
     * - a search you have loaded and then modified (using `addFilter`,
     * `setFilters`, `addFilters`, `addColumn`, `addColumns`, or `setColumns`)
     * but do not save.
     * 
     * Note that this method does not return a URL. It works by loading a search
     * into the session, and then redirecting to a URL that loads the search
     * definition page.
     * 
     * This method is supported in afterSubmit user event scripts, Suitelets,
     * and client scripts.
     * 
     * @since 2012.1
     */
    setRedirectURLToSearch(): void;

    /**
     * Acts like 
     * [nlapiSetRedirectURL(type, identifier, id, editmode, parameters)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3059035.html#bridgehead_N3060274)
     * but redirects end users to a search results page. You can use this method
     * with any kind of search that is held in the nlobjSearch object. This
     * could be:
     * 
     * - an existing saved search,
     * 
     * - an on demand search that you are building in SuiteScript, or
     * 
     * - a search you have loaded and then modified (using `addFilter`,
     * `setFilters`, `addFilters`, `addColumn`, `addColumns`, or `setColumns`)
     * but do not save.
     * 
     * Note that this method does not return a URL. It works by loading a
     * search into the session, and then redirecting to a URL that loads the
     * search results.
     * 
     * This method is supported in afterSubmit user event scripts, Suitelets,
     * and client scripts.
     * 
     * @since 2012.1
     */
    setRedirectURLToSearchResults(): void;
}

/**
 * Primary object used to encapsulate a set of search results. The
 * `nlobjSearchResultSet` object provides both an iterator interface, which
 * supports processing of each result of the search, and stop at any time, and
 * a slice interface, which supports retrieval of an arbitrary segment of the
 * search results, up to 1000 results at a time.
 * 
 * A `nlobjSearchResultSet` object is returned by a call to nlobjSearch.
 * [runSearch()](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3111947.html#bridgehead_N3114123).
 */
declare interface nlobjSearchResultSet {

    /**
     * Calls the developer-defined callback function for every result in this
     * set. There is a limit of 4000 rows in the result set returned in
     * `forEachResult()`.
     * 
     * Your callback function must have the following signature:
     * 
     * boolean callback(`nlobjSearchResult` result);
     * 
     * Note that the work done in the context of the callback function counts
     * towards the governance of the script that called it. For example, if the
     * callback function is running in the context of a scheduled script, which
     * has a 10,000 unit governance limit, you must be sure the amount of
     * processing within the callback function does not put the entire script
     * at risk of exceeding scheduled script governance limits.
     * 
     * Also be aware that the execution of the forEachResult(callback) method
     * consumes 10 governance units.
     * 
     * @param callback A JavaScript function. This may be defined as a separate
     * named function, or it may be an anonymous inline function.
     * 
     * @since 2012.1
     */
    forEachResult(callback: (searchResult: nlobjSearchResult) => boolean): void;


    /**
     * Returns a list of nlobjSearchColumn objects for this result set. This
     * list contains one `nlobjSearchColumn` object for each result column in
     * the `nlobjSearchResult` objects returned by this search.
     */
    getColumns(): nlobjSearchColumn[];

    /**
     * Retrieve a slice of the search result. The start parameter is the
     * inclusive index of the first result to return. The end parameter is the
     * exclusive index of the last result to return. For example,
     * `getResults(0, 10)` retrieves 10 search results, at index 0 through index
     * 9; Unlimited rows in the result are supported, however you can only
     * return 1,000 at a time based on the index values.
     * 
     * If there are fewer results available than requested, then the array will
     * contain fewer than end - start entries. For example, if there are only 25
     * search results, then `getResults(20, 30)` will return an array of 5
     * `nlobjSearchResult` objects.
     * 
     * If more that 1000 rows are required, it is recommended that you modify
     * the search's criteria to reduce the number of results, and the execution
     * time.
     * 
     * Also be aware that the execution of the getResults(start, end) method
     * consumes 10 governance units.
     * 
     * @param start The index number of the first result to return, inclusive.
     * 
     * @param end The index number of the last result to return, exclusive.
     * 
     * @throws SSS_INVALID_SEARCH_RESULT_INDEX if start is negative.
     * 
     * @throws SSS_SEARCH_RESULT_LIMIT_EXCEEDED if more than 1000 rows are
     * requested.
     * 
     * @since 2012.1
     */
    getResults(start: number, end: number): nlobjSearchResult[];
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

    /**
     * Returns the internal ID for the returned record
     * 
     * @returns The record internal ID as an integer
     */
    getId(): number;

    /**
     * Returns the record type for the returned record
     * 
     * @returns The name of the record type as a string - for example, customer,
     * assemblyitem, contact, or projecttask
     */
    getRecordType(): string;

    /**
     * Returns the text value for this 
     * [nlobjSearchColumn(name, join, summary)](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3117719.html) if
     * it is a select field
     * 
     * @param column The name of the search result column.
     * 
     * @since 2009.2
     */
    getText(column: nlobjSearchColumn): string;

    /**
     * Returns the UI display name (ie,. the text value) for this 
     * nlobjSearchColumn. Note that this method is supported on **non-stored**
     * select, image, document fields only.
     * 
     * @param name name of the search column
     * @param join The join internalId for this search column
     * @param summary The summary type used for this search column. Use any of 
     * the following types:
     * - group
     * - sum
     * - count
     * - avg
     * - min
     * - max
     * 
     * @returns The UI display name for this nlobjSearchColumn as a string
     * 
     * @since 2008.1
     */
    getText(name: string, join?: string, summary?: string): string;

    /**
     * Returns the value for the nlobjSearchColumn
     * 
     * @param name The name of the search column
     * 
     * @param join The join internalId for this search column
     * 
     * @param summary The summary type used for this search column. Types are:
     * - group
     * - sum
     * - count
     * - avg
     * - min
     * - max
     * 
     * @returns The value for a search return column as a string
     * 
     * @since 2008.1
     */
    getValue(name: string, join?: string, summary?: string): string;

    /**
     * Can be used on formula fields and non-formula (standard) fields to get
     * the value of a specified search return column
     * 
     * @param column Search return column object whose value you want to return
     * 
     * @returns String value of the search return column
     * 
     * @since 2009.1
     */
    getValue(column: nlobjSearchColumn): string;
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

/*
   --------------------------------------------------

           SCHEDULING APIS

   --------------------------------------------------
*/

/**
 * A call to this API submits a scheduled script for processing. For this to 
 * work, the scheduled script must have a status of **Not Scheduled** on the
 * Script Deployment page. If the script's status is set to **Testing** on the
 * Script Deployment page, the API does not submit the script for processing.
 * 
 * If the deployment status on the Script Deployment page is set to 
 * **Scheduled**, the script is submitted for processing according to the
 * time(s) specified on the Script Deployment page.
 * 
 * The `nlapiScheduleScript` API consumes 20 units per call. This API is
 * supported in user event, portlet, RESTlet, scheduled, and Suitelet scripts.
 * 
 * @param scriptId The script internalId or custom scriptId
 * @param deployId The deployment internal ID or script ID. The first “free”
 * deployment will be used. Free means that the script's deployment status
 * appears as Not Scheduled and the deployment is not currently executing.
 * 
 * @param params Object of name/values used in this scheduled script instance -
 * used to override the script parameters values for this execution.
 * 
 * Note that name values are the script parameter internal IDs. If you are not
 * familiar with what a script parameter is in the context of
 * SuiteScript, see 
 * [Creating Script Parameters Overview](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_N2999300.html)
 * in the NetSuite Help Center.
 * 
 * @returns A string whose value is QUEUED if the script was successfully
 * submitted for processing by this call, or it returns the script's current
 * status. Valid status values are:
 * 
 * - **INQUEUE** - The script you requested is already submitted for processing
 * and waiting to be run. This script cannot be requested again until it
 * finishes processing. If the script is INQUEUE, you must try again later if
 * you want to run the script.
 * 
 * - **INPROGRESS** - The scheduled script is currently running.
 * 
 * - **SCHEDULED** - The script's deployment status is set to scheduled and will
 * be submitted for processing according to the time(s) specified on the script
 * deployment.
 */
declare function nlapiScheduleScript(
    scriptId: string | number,
    deployId?: string | number,
    params?: any): 'INQUEUE' | 'INPROGRESS' | 'SCHEDULED'

/**
 * Creates a recovery point saving the state of the script's execution. When
 * NetSuite resumes execution of the script, it resumes the script at the
 * specified recovery point. Also note that when the script is resumed, its
 * governance units are reset. Be aware, however, all scheduled scripts have a
 * 50 MB memory limit. For complete details on scheduled script memory limits,
 * see Understanding Memory Usage in Scheduled Scripts.
 * 
 * @returns Native Javascript Object. For more info, visit [
 * here](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3053136.html#bridgehead_N3053603)
 */
declare function nlapiSetRecoveryPoint(): {
    status: 'SUCCESS' | 'FAILURE' | 'RESUME',
    reason:
    'SS_NLAPIYIELDSCRIPT' | 'SS_ABORT' | 'SS_MAJOR_RELEASE' |
    'SS_EXCESSIVE_MEMORY_FOOTPRINT ' | 'SS_CANCELLED' |
    'SS_DISALLOWED_OBJECT_REFERENCE' | 'SSS_FILE_OBJECT_NOT_SERIALIZABLE' |
    'SSS_SCRIPT_DESERIALIZATION_FAILURE',
    size: number,
    information: string;
}

/**
 * Creates a recovery point and, when executed, continues from the recovery
 * point. The newly resubmitted script has its governance units reset. To
 * summarize, nlapiYieldScript works as follows:
 * 
 * 1. Creates a new recovery point.
 * 
 * 2. Creates a new scheduled script instance with governance reset.
 * 
 * 3. Associates the recovery point to the new instance of the scheduled script
 * 
 * 4. Submits the new instance for processing.
 * 
 * @returns Native Javascript Object. For more info, visit [
 * here](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3053136.html#bridgehead_N3053967)
 */
declare function nlapiYieldScript(): {
    status: 'FAILURE' | 'RESUME',
    reason:
    'SS_NLAPIYIELDSCRIPT' | 'SS_ABORT' | 'SS_MAJOR_RELEASE' |
    'SS_EXCESSIVE_MEMORY_FOOTPRINT ' | 'SS_CANCELLED' |
    'SS_DISALLOWED_OBJECT_REFERENCE' | 'SSS_FILE_OBJECT_NOT_SERIALIZABLE' |
    'SSS_SCRIPT_DESERIALIZATION_FAILURE',
    size: number,
    information: string;
}

/*
   --------------------------------------------------

           EXECUTION CONTEXT APIS

   --------------------------------------------------
*/

/**
 * Used to branch scripts depending on the metadata or context of the execution.
 * For example, you may want the script to perform in one way when a form is
 * accessed via the UI and another when the form is accessed via web services.
 * 
 * This API is supported in client, user event, scheduled, portlet, and Suitelet
 * scripts.
 * 
 * @returns 
 * [nlobjContext](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3077939.html)
 * object containing information (metadata) about the current user or script context.
 */
declare function nlapiGetContext(): nlobjContext;

/**
 * This API is supported in client, user event, scheduled, portlet, and Suitelet
 * scripts.
 * 
 * @returns The integer value of the current user's department (for example, 3,
 * 9, or 1)
 */
declare function nlapiGetDepartment(): number;

/**
 * Returns the integer value of the current user's location. This API is
 * supported in client, user event, scheduled, portlet, and Suitelet scripts.
 * 
 * @returns The integer value of the current user's location (for example, 5, 7,
 * -2). Note that if a location has not been set, the value of **-1** is
 * returned.
 */
declare function nlapiGetLocation(): number;

/**
 * Returns the internalId for the current user's role. This API is supported in
 * client, user event, scheduled, portlet, and Suitelet scripts.
 * 
 * @returns The integer value of the current user's role (for example: 1, 3, or
 * 5). Note that the value of **-31** is returned if a user cannot be properly
 * identified by NetSuite. This occurs when the user has not authenticated to
 * NetSuite, for example when using externally available ( Available without
 * Login ) Suitelets or online forms.
 */
declare function nlapiGetRole(): number;

/**
 * Returns the internalId for the current user's subsidiary. This API is
 * supported in client, user event, scheduled, portlet, and Suitelet scripts.
 * 
 * @returns The integer value for the current user's subsidiary (for example 1,
 * 3, or 5). Note that if a subsidiary has not been set (for example, the
 * subsidiaries feature is not turned on in the user's account), the value of 1
 * is returned if this function is called.
 */
declare function nlapiGetSubsidiary(): number;

/**
 * Returns the internalId of the current NetSuite user. This API is supported in
 * client, user event, scheduled, portlet, and Suitelet scripts.
 * 
 * @returns The integer value of the current user (for example, 195, 25, 21).
 * Note that the value of -4 is returned if a user cannot be properly identified
 * by NetSuite. This occurs when the user has not authenticated to NetSuite, for
 * example when using externally available (Available without Login ) Suitelets
 * or online forms.
 */
declare function nlapiGetUser()

/**
 * This API is supported in all server-side and record-level (global) client
 * scripts.
 * 
 * Use this API to log an entry on the Execution Log subtab. The Execution Log
 * subtab appears on the Script Deployment page for a script. See
 * [Creating Script Execution Logs](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_N2936533.html)
 * to learn more about writing logs to the  Execution Log subtab.
 * 
 * @param type One of the following log types:
 * 
 * - DEBUG
 * 
 * - AUDIT
 * 
 * - ERROR
 * 
 * - EMERGENCY
 * 
 * @param title A title used to organize log entries (max length: 99
 * characters). If you set title to null or empty string (''), you will see the
 * word “Untitled” appear in your log entry.
 * 
 * @param details The details of the log entry (max length: 3999 characters)
 * 
 * @throws SSS_MISSING_REQD_ARGUMENT - if no value is specified for title.
 */
declare function nlapiLogExecution(
    type: 'DEBUG' | 'AUDIT' | 'ERROR' | 'EMERGENCY',
    title?: string,
    details?: string
): void;

/**
 * Encapsulates user information as well as script execution context at runtime.
 * Note that the 
 * [nlapiGetContext()](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3055475.html#bridgehead_N3055647)
 * function returns a reference to this object.
 */
declare interface nlobjContext {

    /**
     * Returns the bundle ID for the current script.
     * 
     * @returns A string value representing the bundle ID for the currently
     * executing script.
     * 
     * @since 2016.1
     */
    getBundleId(): string;

    /**
     * Returns the currently logged in user's account ID
     * 
     * @returns The string value of user's account ID, for example NL555ABC
     * 
     * @since 2007.0
     */
    getCompany(): string;

    /**
     * Returns the internal ID of the currently logged in user's department
     * 
     * @returns The logged in user's department ID as an integer
     * 
     * @since 2007.0
     */
    getDepartment(): number;

    /**
     * Returns the deploymentId for the current script deployment (ie., the
     * currently executing script)
     * 
     * @returns The deploymentId as a string
     * 
     * @since 2009.1
     */
    getDeploymentId(): string;

    /**
     * Returns the currently logged in user's e-mail address. The **email**
     * field  on the user's employee record must contain an email address.
     * 
     * @returns An email address as a string
     * 
     * @since 2007.0
     */
    getEmail(): string;

    /**
     * Returns the environment in which the current script is being executed.
     * Valid values are SANDBOX | PRODUCTION | BETA | INTERNAL.
     * 
     * @returns The name of the environment as a string
     */
    getEnvironment(): 'SANDBOX' | 'PRODUCTION' | 'BETA' | 'INTERNAL';

    /**
     * Returns context information about what triggered the current script.
     * Possible return values are:
     * 
     * - `userinterface` - Client SuiteScript or user event triggers invoked from
     * the UI
     * 
     * - `webservices` - User event triggers invoked from webservice calls
     * 
     * - `csvimport` - User event triggers invoked during CSV imports
     * 
     * - `portlet` - Portlet script or user event triggers invoked via portlet
     * scripts
     * 
     * - `scheduled` - Scheduled script or user event triggers invoked via
     * scheduled scripts
     * 
     * - `suitelet` - Suitelet or user event triggers invoked via suitelets
     * 
     * - `custommassupdate` - Mass update script triggers invoked via custom Mass
     * Update scripts
     * 
     * - `workflow` - Workflow action script triggers invoked via Workflow Action
     * scripts
     * 
     * - `webapplication` - Suitelet or user event triggers invoked via SSP
     * application files
     * 
     * - `webstore` - User event triggers invoked from the web store (for example
     * to determine if sales orders or customers were created in the web store).
     * 
     * - `userevent` - This context type represents cases in which records are
     * generated in the backend (as opposed to being generated by the UI). For
     * example, the 'userevent' context distinguishes the case wherein a Bill
     * Payment is submitted as part of a non-record page. Whereas the
     * 'userinterface' context identifies when a single Bill Payment record is
     * submitted from the UI.
     * 
     * @returns The execution context as a string
     * 
     * @since 2007.0
     */
    getExecutionContext():
        'userinterface' | 'webservices' | 'csvimport' | 'portlet' |
        'scheduled' | 'suitelet' | 'custommassupdate' | 'workflow' |
        'webapplication' | 'webstore' | 'userevent';

    /**
     * Use this method to determine if a particular feature is enabled in a
     * NetSuite account. These are the features that appear on the Enable
     * Features page (Setup > Company > Setup Tasks > Enable Features
     * (Administrator)).
     * 
     * @param name The internal ID of the feature. For a list of feature IDs,
     * see 
     * [Feature Names and IDs](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_N3247851.html)
     * in the NetSuite Help Center.
     * 
     * @returns Returns true if a feature is enabled in the current account
     * 
     * @since 2009.2
     */
    getFeature(name: string): boolean | 'T' | 'F';

    /**
     * Returns the internal ID of the currently logged in user's location
     * 
     * @returns The logged in user's location ID as an integer
     * 
     * @since 2007.0
     */
    getLocation(): number;

    /**
     * Returns the script logging level for the current script execution. This
     * method is not supported on client scripts.
     * 
     * @returns The string value of the script log level. Possible values are
     * DEBUG, AUDIT, ERROR, EMERGENCY
     * 
     * @since 2008.2
     */
    getLogLevel(): 'DEBUG' | 'AUDIT' | 'ERROR' | 'EMERGENCY';

    /**
     * Returns the currently logged in user's name
     * 
     * @returns The logged in user's name as a string
     * 
     * @since 2007.0
     */
    getName(): string;

    /**
     * Return the % complete specified for the current scheduled script
     * execution. The return value will appear in the **%Complete** column in
     * the Scheduled Script Status page. Note that this method can only be
     * called from scheduled scripts.
     * 
     * @returns The integer value of the percent complete field
     * 
     * @since 2009.1
     */
    getPercentComplete(): number;

    /**
     * Use this method to get a user's permission level for a specific
     * permission. For information on working with NetSuite permissions, see the
     * topic Understanding NetSuite Permissions in the NetSuite Help Center.
     * 
     * @param name The internal ID of a permission. For a list of permission
     * IDs, see 
     * [Permission Names and IDs](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_N3236764.html)
     * in the SuiteScript Reference Guide.
     * 
     * @returns The integer value of user's permission level for a specific permission. Values 4 through 0 can be returned:
     * 
     * - 4 (FULL)
     * 
     * - 3 (EDIT)
     * 
     * - 2 (CREATE)
     * 
     * - 1 (VIEW)
     * 
     * - 0 (NONE)
     * 
     * @since 2009.2
     */
    getPermission(name: string): 0 | 1 | 2 | 3 | 4

    /**
     * Use this method to get the value of a NetSuite preference. Currently only
     * **General Preferences** and **Accounting Preferences** are exposed in
     * SuiteScript. (You can view General Preferences by going to Setup >
     * Company > Preferences > General Preferences (Administrator). View
     * Accounting Preferences by going to Setup > Accounting > Preferences >
     * Accounting Preferences (Administrator).)
     * 
     * @param name The internal ID of the preference. For a list of preference
     * IDs, see 
     * [Preference Names and IDs](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_N3251359.html)
     * in the NetSuite Help Center.
     * 
     * @returns The value of a system or script preference for the current user.
     * The value can be T or F if the preference is a NetSuite check box field.
     * The value can also be a string if the preference is a NetSuite dropdown
     * field.
     * 
     * @since 2009.2
     */
    getPreference(name: string): 'T' | 'F' | string;

    /**
     * Returns the number of processors available to the currently logged in
     * account.
     * 
     * [SuiteCloud Processors](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_1498571420.html)
     * is the current system used to execute (process) scheduled scripts and
     * map/reduce scripts. This property is helpful if you are a SuiteApp
     * developer and your script needs to know the total number of processors
     * available to a deployment.
     * 
     * For scheduled script deployments that continue to use queues, use 
     * nlobjContext.
     * [getQueueCount()](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3077939.html#bridgehead_N3081754).
     * With the introduction of SuiteCloud Processors, new scheduled script
     * deployments no longer use queues, but pre-existing scheduled script 
     * deployments continue to use queues until the queues are removed 
     * (see 
     * [SuiteCloud Processors – Supported Task Types](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_1505167691.html)
     * ).
     * 
     * Be aware that the number of processors available may not be the same as
     * the number of queues available. For more information, see
     * [SuiteCloud Plus Settings](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N259503.html).
     * 
     * @returns The number of queues
     * 
     * @since 2013.1
     */
    getProcessorCount(): number;

    /**
     * Returns the number of queues available to the currently logged in
     * account.
     * 
     * [SuiteCloud Processors](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_1498571420.html)
     * is the current system used to execute (process) scheduled scripts. This
     * property is helpful if you are a SuiteApp developer and your script
     * needs to know the total number of queues available to a deployment.
     * 
     * Be aware that the number of queues available may not be the same as the
     * number of processors available (see 
     * [SuiteCloud Plus Settings](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_1498571420.html)
     * ).
     * 
     * @returns The number of queues
     * 
     * @since 2013.1
     */
    getQueueCount(): number;

    /**
     * Returns the remaining amount of unit usage for the current script
     * 
     * @returns The integer value of the remaining unit count
     * 
     * @since 2007.0
     * 
     * @example var context = nlapiGetContext().getRemainingUsage();
     */
    getRemainingUsage(): number;

    /**
     * Returns the internal ID of the currently logged in user's role
     * 
     * @returns The logged in user's role ID as a string
     * 
     * @since 2007.1
     */
    getRole(): string;

    /**
     * Returns the internal ID of the currently logged in user's center type
     * (role center)
     * 
     * @returns The string value of the logged in user's center - for example,
     * SALES, ACCOUNTING, CLASSIC. Note that the string value of a custom center
     * can also be returned.
     * 
     * @since 2008.2
     */
    getRoleCenter(): string;

    /**
     * Returns the custom scriptId of the role (as opposed to the internal
     * numerical ID).
     * 
     * When bundling a custom role, the internal ID number of the role in the
     * target account can change after the bundle is installed. Therefore, in
     * the target account you can use getRoleId to return the unique/custom
     * scriptId assigned to the role.
     * 
     * @returns Custom scriptId of a role as a string.
     * 
     * @since 2012.2
     */
    getRoleId(): string;

    /**
     * Returns the scriptId for the currently executing script
     * 
     * @returns The scriptId as a string
     * 
     * @since 2009.1
     */
    getScriptId(): string;

    /**
     * Use this method to get the value of a user-defined session object for the
     * current user.
     * 
     * @param name The key used to store the session object
     * 
     * @returns Returns the string value of a user-defined session object for
     * the current user
     * 
     * @since 2009.2
     */
    getSessionObject(name: string): string;

    /**
     * Use this API to get a system or script setting. Note that if you want to
     * get session, feature, or permission settings directly, you can also use
     * these `nlobjContext` methods:
     * 
     * - [getSessionObject(name)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3077939.html#bridgehead_N3082397)
     * 
     * - [getFeature(name)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3077939.html#bridgehead_N3080545)
     * 
     * - [getPermission(name)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3077939.html#bridgehead_N3081363)
     * 
     * @param type The type of script/system setting. Possible values include:
     * 
     * - SESSION - session variable (volatile setting defined per session).
     * Supported in server scripts only.
     * 
     * - FEATURE - returns T (enabled) or F (disabled) depending on whether a
     * feature is enabled. Supported in client and server SuiteScript.
     * 
     * In the NetSuite Help Center, see 
     * [Feature Names and IDs](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_N3247851.html)
     * for feature names and internal IDs.
     * 
     * - SCRIPT - script parameter (defined per script). Supported in client and
     * server SuiteScript. If you do not know what script parameters are in
     * NetSuite, see 
     * [Creating Script Parameters Overview](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_N3236764.html).
     * 
     * @param name The name of the script/system setting
     * 
     * @returns If type is specified as SCRIPT, SESSION, or FEATURE, a string
     * value is returned. If you do not know what script parameters are in
     * NetSuite, see 
     * [Creating Script Parameters Overview](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_N2999300.html).
     */
    getSetting(type: 'SESSION' | 'FEATURE' | 'SCRIPT', name: string): string;

    /**
     * Use this API to get a system or script setting. Note that if you want to
     * get session, feature, or permission settings directly, you can also use
     * these `nlobjContext` methods:
     * 
     * - [getSessionObject(name)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3077939.html#bridgehead_N3082397)
     * 
     * - [getFeature(name)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3077939.html#bridgehead_N3080545)
     * 
     * - [getPermission(name)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3077939.html#bridgehead_N3081363)
     * 
     * @param type The type of script/system setting. Possible values include:
     *
     * - PERMISSION - returns permission level: 0 (none), 1 (view), 2 (create),
     * 3 (edit), 4 (full). Supported in client and server SuiteScript.
     * 
     * In the NetSuite Help Center, see 
     * [Permission Names and IDs](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_N3236764.html)
     * for permission names and internal IDs.
     * 
     * @param name The name of the script/system setting
     * 
     * @returns If type is specified as PERMISSION, an integer value is
     * returned.
     */
    getSetting(type: 'PERMISSION', name: string): number;

    /**
     * Returns the internal ID of the currently logged in user's subsidiary
     * 
     * @returns The logged in user's subsidiary ID as an integer
     * 
     * @since 2007.1
     */
    getSubsidiary(): number;

    /**
     * Returns the currently logged in user's internal ID
     * 
     * @returns The logged in user's ID as a string
     * 
     * @since 2007.1
     */
    getUser(): string;

    /**
     * Returns the version of NetSuite that the method is called in. For
     * example, if getVersion is executed in an account running NetSuite 2010.2,
     * the value returned is 2010.2. If getVersion is executed in an account
     * running NetSuite 2010.1, the value returned is 2010.1.
     * 
     * This method may be helpful to those installing SuiteBundles in other
     * NetSuite accounts, and wish to know the version number before installing
     * the bundle.
     * 
     * @returns The NetSuite account version as a number - for example: 2010.2
     * 
     * @since 2010.2
     */
    getVersion(): number;

    /**
     * Sets the percent complete for the currently executing scheduled script.
     * Note that this method can only be called from scheduled scripts.
     * 
     * @param pct The percentage of records completed
     * 
     * @since 2009.1
     */
    setPercentComplete(pct: number): void;

    /**
     * Use this method to add or set the value of a user-defined session object
     * for the current user. This value is valid during the current user's
     * login.
     * 
     * This call allows the user to temporarily save something to the session
     * before persisting it in a custom record.
     * 
     * @param name The key used to store the session object
     * 
     * @param value The value to associate with this key in the user's session
     * 
     * @since 2009.2
     */
    setSessionObject(name: string, value: string): void;

    /**
     * Sets the value of a script or user-defined setting. Only
     * available in server scripts.
     * 
     * @param type The type of script/system setting
     * 
     * @param name The name of the script/system setting 
     * 
     * @param value The new value for the script/system setting
     */
    setSetting(type: string, name: string, value: string): void;
}

/*
   --------------------------------------------------

           UI BUILDER APIS

   --------------------------------------------------
*/

/**
 * Use this function to return a reference to an 
 * [nlobjAssistant](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3127246.html)
 * object, which is the basis for building your own custom assistant.
 * This API is supported in Suitelets.
 * 
 * @param title The name of the assistant. This name will appear at the top of
 * all assistant pages.
 * 
 * @param hideHeader If not set, defaults to false. If set to true, the header
 * (navbar/logo) on the assistant is hidden from view. Note that the header is
 * where the Add to Shortcuts link appears.
 * 
 * @since 2009.2
 */
declare function nlapiCreateAssistant(
    title: string,
    hideHeader?: boolean
): nlobjAssistant;

/**
 * Creates an 
 * [nlobjForm](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3144618.html)
 * object which can be used to generate an entry form page. This API is
 * available to Suitelets only.
 *  
 * @param title The title for the form
 * 
 * @param hideNavbar Set to true if the navigation bar should be hidden on the
 * Suitelet. Setting to true enables “popup page” use cases in which the popup
 * can be created with the 
 * [UI Objects](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3126890.html)
 * API rather than HTML.
 * 
 * When hideNavbar is set to false, the standard NetSuite navigation appears on 
 * the form or popup. Note that this navigation bar contains links to pages that
 * require users to be logged in to access.
 * 
 * @returns An 
 * [nlobjForm](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3144618.html)
 * object
 */
declare function nlapiCreateForm(
    title: string, hideNavbar?: boolean
): nlobjForm;

/**
 * Creates an nlobjList object used to generate an internal standalone list.
 * This API is available to **Suitelets only**.
 * 
 * @param title The title for the list
 * @param hideNavbar Set to true if the navigation bar should be hidden on the
 * Suitelet. Setting to true enables “popup page” use cases in which the popup
 * can be created with the UI Objects API rather than HTML.
 * 
 * When hideNavbar is set to false, the standard NetSuite navigation appears on
 * the form or popup. Note that this navigation bar contains links to pages that
 * require users to be logged in to access.
 * 
 * @returns An 
 * [nlobjList](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3153351.html)
 * object
 */
declare function nlapiCreateList(
    title: string, hideNavbar?: boolean
): nlobjList;

/**
 * Use this function to produce HTML and PDF printed forms that utilize advanced 
 * PDF/HTML template capabilities. This API returns an 
 * [nlobjTemplateRenderer](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3163411.html) 
 * object. This object includes methods that pass in a template as string to be 
 * interpreted by FreeMarker, and render interpreted content in your choice of 
 * two different formats: as HTML output to an 
 * [nlobjResponse](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3109660.html) 
 * object, or as XML string that can be passed to 
 * [nlapiXMLToPDF(xmlstring)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3062490.html#bridgehead_N3066595) 
 * to produce a PDF.
 * 
 * This function is available when the Advanced PDF/HTML Templates feature is 
 * enabled. For information about this feature, see 
 * [Advanced PDF/HTML Templates](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_4453550706.html).
 * 
 * @returns An 
 * [nlobjTemplateRenderer](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3163411.html) 
 * object
 * 
 * @since 2013.1
 */
declare function nlapiCreateTemplateRenderer(): nlobjTemplateRenderer;

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

    /**
     * Use this method to get all fields in an assistant. Regardless of which 
     * page or step the fields have been added to, all fields will be returned. 
     * Also note that where you call this method matters. If you call 
     * `getAllFields()` early in your script, and then add ten more fields at 
     * the end of your script, `getAllFields()` will return only those fields that
     * were added prior to the call.
     * 
     * @returns String[] of all fields in a custom assistant
     * 
     * @since 2009.2
     */
    getAllFields(): string[];

    /**
     * Use this method to get all field groups on an assistant page. Also note
     * that where you call this method matters. If you call
     * `getAllFieldGroups()` early in your script, and then add three more field
     * groups at the end of your script, `getAllFieldGroups()` will return only
     * those field groups that were added prior to the call.
     * 
     * @returns String[] of all field groups in the assistant
     * 
     * @since 2009.2
     */
    getAllFieldGroups(): string[];

    /**
     * Use this method to return an array of all the assistant steps for this
     * assistant.
     * 
     * @since 2009.2
     */
    getAllSteps(): nlobjAssistantStep[];

    /**
     * Use this method to get all sublist names that appear on an assistant 
     * page. Also note that where you call this method matters. If you call 
     * `getAllSubLists()` early in your script, and then add three more sublists
     * at the end of your script, `getAllSubLists()` will return only those
     * sublists that were added prior to the call.
     * 
     * @returns String[] of all sublists in an assistant
     * 
     * @since 2009.2
     */
    getAllSubLists(): string[];

    /**
     * Use this method to get the current step that was set via 
     * `nlobjAssistant.setCurrentStep(step)`. After getting the current step, 
     * you can add fields, field groups, and sublists to the step.
     * 
     * @since 2009.2
     */
    getCurrentStep(): nlobjAssistantStep;

    /**
     * Use this method to return a field on an assistant page.
     * 
     * @param name The internal ID of the field
     * 
     * @since 2009.2
     */
    getField(name: string): nlobjField;

    /**
     * Use this method to return a field group on an assistant page.
     * 
     * @param name The internal ID for the field group
     * 
     * @since 2009.2
     */
    getFieldGroup(name: string): nlobjFieldGroup;

    /**
     * Use this method to get the last submitted action that was performed by
     * the user. Typically you will use
     * [getNextStep()](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3127246.html#bridgehead_N3131132)
     * to determine the next step (based on the last action).
     * 
     * Possible assistant submit actions that can be specified are:
     * 
     * - **next** - means that the user has clicked the Next button in the 
     * assistant
     * 
     * - **back** - means that the user has clicked the Back button
     * 
     * - **cancel** - means that the user has clicked the Cancel button
     * 
     * - **finish** - means that the user has clicked the Finish button. By
     * default, inline text then appears on the finish page saying 
     * “Congratulations! You have completed the <assistant title>” - where 
     * <assistant title> is the title set in 
     * [nlapiCreateAssistant(title, hideHeader)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3056572.html#bridgehead_N3056901) or 
     * nlobjAssistant.[setTitle(title)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3127246.html#bridgehead_N3133383).
     * 
     * - **jump** - if
     * nlobjAssistant.[setOrdered(ordered)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3127246.html#bridgehead_N3132764)
     * has been set to false (meaning that steps can be completed in random
     * order), then **jump** is used to get the user's last action in a 
     * non-sequential process.
     * 
     * @returns The last submit action (as a string)
     * 
     * @since 2009.2
     */
    getLastAction(): string;

    /**
     * Use this method to get the step the last submitted action came from.
     * 
     * @since 2009.2
     */
    getLastStep(): nlobjAssistantStep;

    /**
     * Use this method to return the next logical step corresponding to the
     * user's last submitted action. You should only call this method after you
     * have successfully captured all the information from the last step and are
     * ready to move on to the next step. You would use the return value to set
     * the current step prior to continuing.
     * 
     * @returns Returns the next logical step based on the user's last submit
     * action, assuming there were no errors. Typically you will call
     * [setCurrentStep(step)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3127246.html#bridgehead_N3132050)
     * using the returned step if the submit was successful.
     * 
     * @since 2009.2
     */
    getNextStep(): nlobjAssistantStep;

    /**
     * Use this method to return an 
     * [nlobjAssistantStep](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3137928.html)
     * object on an assistant page.
     * 
     * @param name The internal ID of the step
     * 
     * @since 2009.2
     */
    getStep(name: string): nlobjAssistantStep;

    /**
     * Use this method to get the total number of steps in an assistant.
     * 
     * @returns The total number of steps in an assistant. Value returned as an
     * integer.
     * 
     * @since 2009.2
     */
    getStepCount(): number;

    /**
     * Use this method to return a sublist on an assistant page.
     * 
     * @param name The internal ID for the sublist
     * 
     * @since 2009.2
     */
    getSubList(name: string): nlobjSubList;

    /**
     * Use this method to determine if an assistant has an error message to
     * display for the current step.
     * 
     * @returns Returns true if 
     * [setError(html)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3127246.html#bridgehead_N3132234)
     * was called
     * 
     * @since 2009.2
     */
    hasError(): boolean;

    /**
     * Use this method to determine when all steps in an assistant are completed.
     * 
     * @returns Returns true if all steps in the assistant have been completed 
     * or if 
     * [setFinished(html)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3127246.html#bridgehead_N3132508)
     * has been called.
     */
    isFinished(): boolean;

    /**
     * Use this method to manage redirects in an assistant
     * 
     * @param response The response object
     * 
     * @since 2009.2
     */
    sendRedirect(response: nlobjResponse): void;

    /**
     * Use this method to mark a step as the current step. In the UI, the step
     * will be highlighted when the user is on that step (see figure).
     * 
     * @param step The name of the step object
     * 
     * @since 2009.2
     */
    setCurrentStep(step: nlobjAssistantStep): void;

    /**
     * Use this method to set an error message for the current step. If you
     * choose, you can use HTML tags to format the message.
     * 
     * @param html Error message text
     * 
     * @since 2009.2
     */
    setError(html: string): void;

    /**
     * Use this method to set values for fields on an assistant page.
     * 
     * @param values An associative array containing name/value pairs that map
     * field names to field values
     * 
     * @since 2009.2
     */
    setFieldValues(values: { [key: string]: string }): void;

    /**
     * Use this method to mark the last page in an assistant. Set the rich text
     * to display a completion message on the last page.
     * 
     * @param html The text to display when the assistant has finished. For
     * example, “Congratulations! You have successfully set up your account.”
     * 
     * @since 2009.2
     */
    setFinished(html: string): void;

    /**
     * Use this method to display steps without numbers.
     * 
     * @param hasStepNumber Set to false to turn step numbering off
     * 
     * @since 2010.1
     */
    setNumbered(hasStepNumber?: boolean): void;

    /**
     * Use this method to enforce a sequential ordering of assistant steps. If 
     * steps are ordered, users must complete the current step before the 
     * assistant will allow them to proceed to the next step. From a display 
     * perspective, ordered steps will always appear in the left panel of the 
     * assistant (see first figure). Note that by default, steps in an assistant
     * are ordered.
     * 
     * If steps are unordered, they can be completed in any order. Additionally,
     * unordered steps are always displayed horizontally under the assistant
     * title (see second figure).
     * 
     * @param ordered A value of `true` means steps must be completed 
     * sequentially, and that they will appear vertically in the left panel of
     * the assistant. A value of `false` means steps do not need to be completed
     * sequentially, and they will appear horizontally, directly below the
     * assistant title.
     * 
     * @since 2009.2
     */
    setOrdered(ordered: boolean): void;

    /**
     * Use this method to set the scriptId for a global client script you want
     * to run on an assistant page.
     * 
     * @param script The scriptId of the global client script
     * 
     * @since 2009.2
     */
    setScript(script: string | number): void;

    /**
     * Use this method to show/hide the **Add to Shortcuts** link that appears
     * in the top-right corner of an assistant page. Note that if you do not
     * call this method in your script, the default is to show the Add to
     * Shortcuts link at the top of all assistant pages. Therefore, it is
     * recommended that you use this method only if you want to hide this link.
     * 
     * @param show A value of false means that the Add to Shortcuts link does
     * not appear on the assistant. A value of true means that it will appear.
     * 
     * @since 2009.2
     */
    setShortcut(show: boolean): void;

    /**
     * Use this method to set the splash screen for an assistant page.
     * 
     * @param title The title of the splash screen
     * 
     * @param text1 Text for the splash screen
     * 
     * @param text2 If you want splash content to have a two-column appearance, 
     * provide content in the text2 parameter.
     * 
     * @since 2009.2
     */
    setSplash(title: string, text1: string, text2?: string): void;

    /**
     * Use this method to set the title for the assistant. If you have already 
     * defined the title using 
     * [nlapiCreateAssistant(title, hideHeader)](), you do not need to call the 
     * `setTitle(title)` method. Also note that the title you provide using 
     * `setTitle(title)` will override the title specified in the 
     * `nlapiCreateAssistant()` function.
     * 
     * @param title Assistant title
     * 
     * @since 2009.2
     */
    setTitle(title: string): void;
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
 * Primary object used to encapsulate list columns. To add a column, you must
 * first create a custom list using 
 * [nlapiCreateList(title, hideNavbar)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3056572.html#bridgehead_N3057216),
 * which returns an
 * [nlobjList](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3153351.html)
 * object.
 * 
 * After the list object is instantiated, you can add a standard column using 
 * the nlobjList.
 * [addColumn(name, type, label, align)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3153351.html#bridgehead_N3153672)
 * method.
 * 
 * You can also add an “Edit | View” column using the nlobjList.
 * [addEditColumn(column, showView, showHrefCol)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3153351.html#bridgehead_N3153855)
 * method. Both methods return an `nlobjColumn` object.
 */
declare interface nlobjColumn {

    /**
     * Adds a URL parameter (optionally defined per row) to this column's URL.
     * Should only be called after calling
     * [setURL(url, dynamic)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3139838.html#bridgehead_N3140260)
     * 
     * @param param The parameter name added to the URL
     * 
     * @param value The parameter value added to the URL - or - a column in the 
     * data source that returns the parameter value for each row
     * 
     * @param dynamic If true, then the parameter value is actually an alias 
     * that is calculated per row
     * 
     * @since 2008.2
     */
    addParamToURL(param: string, value: string, dynamic?: boolean): void;

    /**
     * The UI label used for this column
     * 
     * @param label Sets the UI label for this column
     * 
     * @since 2008.2
     */
    setLabel(label: string): void;

    /**
     * Sets the base URL (optionally defined per row) for this column
     * 
     * @param url The base URL or a column in the data source that returns the 
     * base URL for each row
     * 
     * @param dynamic If true, then the URL is actually an alias that is 
     * calculated per row
     * 
     * @since 2008.2
     */
    setURL(url: string, dynamic?: boolean): void;
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
 * Primary object used to encapsulate a NetSuite-looking form. Note that the 
 * [nlapiCreateForm(title, hideNavbar)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3056572.html#bridgehead_N3057076)
 * function returns a reference to this object.
 */
declare interface nlobjForm {

    /**
     * Adds a button to a form
     * 
     * @param name The internal ID name of the button. The internal ID must be
     * in lowercase, contain no spaces, and include the prefix custpage if you
     * are adding the button to an existing page. For example, if you add a
     * button that appears as **Update Order**, the button internal ID should be
     * something similar to **custpage_updateorder**.
     * 
     * @param label The UI label used for this button
     * 
     * @param script The onclick script used for this button
     * 
     * @since 2008.2
     */
    addButton(name: string, label: string, script?: string): nlobjButton;

    /**
     * Adds a field that lets you store credentials in NetSuite to be used when
     * invoking services provided by third parties. For example, merchants need 
     * to store credentials in NetSuite used to communicate with Payment Gateway
     * providers when executing credit card transactions.
     * 
     * This method is supported in client and server scripts.
     * 
     * Additional things to note about this method:
     * 
     * - Credentials associated with this field are stored in encrypted form.
     * 
     * - No piece of SuiteScript holds a credential in clear text mode.
     * 
     * - NetSuite reports or forms will never provide to the end user the clear 
     * text form of a credential.
     * 
     * - Any exchange of the clear text version of a credential with a third
     * party must occur over SSL.
     * 
     * For no reason will NetSuite ever log the clear text value of a credential
     * (for example, errors, debug message, alerts, system notes, and so on).
     * 
     * @param id The internal ID of the credential field.
     * 
     * @param label The UI label for the credential field.
     * 
     * @param website The domain the credentials can be sent to. For example,
     * 'www.mysite.com'. This value can also be an array of strings representing
     * a list of domains to which the credentials can be sent using
     * `nlapiRequestUrlWithCredentials`. Note that although no exception is
     * thrown if this parameter value is not passed,
     * [nlapiRequestURLWithCredentials(credentials, url, postdata, headers, httpsMethod)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3059035.html#bridgehead_N3059544)
     * will not work without it.
     * 
     * @param scriptId The scriptId of the script that is allowed to use this
     * credential field. For example, 'customscript_my_script'. Note that
     * although no exception is thrown if this parameter value is not passed,
     * [nlapiRequestURLWithCredentials(credentials, url, postdata, headers, httpsMethod)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3059035.html#bridgehead_N3059544)
     * will not work without it.
     * 
     * @param value If you choose, you can set an initial value for this field. This value is the handle to the credentials. If you do not want to set a value, you must pass in a null value or empty string.
     * 
     * @param entityMatch Controls whether use of 
     * `nlapiRequestUrlWithCredentials` with this credential is restricted to 
     * the same entity that originally entered the credential. An example where 
     * you would not want this (you would set to false ) is with a credit card 
     * processor, where the credential represents the company an employee is 
     * working for and multiple entities will be expected to make secure calls 
     * out to the processor (clerks, for example). An example where you might 
     * want to set entityMatch to true is when each user of the remote call has 
     * his or her own credentials.
     * 
     * @param tab The tab parameter can be used to specify either a tab or a 
     * field group (if you have added nlobjFieldGroup objects to your form). If 
     * tab is empty, then the field is added to the “main” section of the form.
     * 
     * @since 2012.1
     */
    addCredentialField(
        id: string,
        label: string,
        website?: string,
        scriptId?: string,
        value?: string,
        entityMatch?: boolean,
        tab?: string
    ): nlobjField;

    /**
     * Adds an 
     * [nlobjField](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3140379.html)
     * object to a form and returns a reference to it
     * 
     * @param name The internal ID name of the field. The internal ID must be in
     * lowercase, contain no spaces, and include the prefix custpage if you are
     * adding the field to an existing page. For example, if you add a field
     * that appears as Purchase Details, the field internal ID should be
     * something similar to `custpage_purchasedetails` or 
     * `custpage_purchase_details`.
     * 
     * @param type The field type for this field. Use any of the following
     * enumerated field types:
     * 
     * - text
     * 
     * - radio - See
     * [Working with Radio Buttons](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3144618.html#bridgehead_N3149879)
     * for details on adding this field type.
     * 
     * - label - This is a field type that has no values. It is used for placing
     * a label next to another field. In
     * [Working with Radio Buttons](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3144618.html#bridgehead_N3149879),
     * see the first code sample that shows how to set this field type and how
     * it will render in the UI.
     * 
     * - email
     * 
     * - phone
     * 
     * - date
     * 
     * - datetimetz - This field type lets you combine date and time values in
     * one field. For example, you may want a single field to contain date and
     * time “timestamp” data. After a user enters a date/time value, the data is
     * rendered in the user's preferred date and time format, as well as the
     * user's time zone. Also note that time values are stored in NetSuite down
     * to the second.
     * 
     * - currency
     * 
     * - float
     * 
     * - integer
     * 
     * - checkbox
     * 
     * - select
     * 
     * - url - See 
     * [Create a Form with a URL Field](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N2969820.html)
     * for an example how to use this type.
     * 
     * - timeofday
     * 
     * - textarea
     * 
     * - multiselect
     * 
     * - image - This field type is available **only** for fields appearing on
     * list/staticlist sublists. You cannot specify an image field on a form.
     * 
     * - inlinehtml
     * 
     * - password
     * 
     * - help
     * 
     * - percent
     * 
     * - longtext
     * 
     * Important Long text fields created with SuiteScript have a character
     * limit of 100,000. Long text fields created with Suitebuilder have a
     * character limit of 1,000,000.  
     * 
     * - richtext
     * 
     * - file - This field type is available only for Suitelets and will appear
     * on the main tab of the Suitelet page. Setting the field type to **file** 
     * adds a file upload widget to the page and changes the form encoding type
     * for the form to multipart/form-data. See
     * [Uploading Files to the File Cabinet Using SuiteScript](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3087039.html#bridgehead_N3089140)
     * for an example of creating a **file** field type, and then later
     * retrieving this file using the nlobjRequest.
     * [getFile(id)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3106730.html#bridgehead_N3107266)
     * method.
     * 
     * @param label The UI label for this field (this is the value displayed for
     * help fields)
     * 
     * @param sourceOrRadio The internalId or scriptId of the source list for
     * this field if it is a select (List/Record) or multi-select field. See
     * [List/Record Type IDs](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3144618.html#bridgehead_N3148193)
     * for the internal IDs of all supported list/record types.
     * 
     * @param tab The tab parameter can be used to specify either a tab or a 
     * field group (if you have added nlobjFieldGroup objects to your form). If
     * tab is empty, then the field is added to the “main” section of the form.
     * 
     * @since 2008.2
     */
    addField(
        name: string,
        type: 'text' | 'radio' | 'label' | 'email' | 'phone' | 'date' |
            'datetimetz' | 'currency' | 'float' | 'integer' | 'checkbox' |
            'select' | 'url' | 'timeofday' | 'textarea' | 'multiselect' |
            'image' | 'inlinehtml' | 'password' | 'help' | 'percent' |
            'longtext' | 'file',
        label?: string,
        sourceOrRadio?: number | string,
        tab?: string
    ): nlobjField;

    /**
     * Adds a field group to the form.
     * 
     * @param name Provide an internal ID for the field group.
     * 
     * @param label  The UI label for the field group
     * 
     * @param tab Specify the tab you the field group to appear on. If no tab is
     * specified, the field group is placed on the “main” area of the form.
     * 
     * @since 2011.1
     */
    addFieldGroup(name: string, label: string, tab: string): nlobjFieldGroup;

    /**
     * Adds a navigation cross-link to the form
     * 
     * @param type The type of navbar link to add. Possible values include:
     * 
     * - breadcrumb - appears on top left corner after system bread crumbs
     * 
     * - crosslink - appears on top right corner
     * 
     * @param title The text displayed in the link
     * 
     * @param url The URL used for this link
     * 
     * @since 2008.2
     */
    addPageLink(
        type: 'breadcrumb' | 'crosslink',
        title: string,
        url: string
    ): void;

    /**
     * Adds a reset button to a form
     * 
     * @param label The UI label used for this button. If no label is provided,
     * the label defaults to **Reset**.
     * 
     * @since 2008.2
     */
    addResetButton(label?: string): nlobjButton;

    /**
     * Adds an nlobjSubList object to a form and returns a reference to it. Note
     * that sorting (in the UI) is not supported on static sublists created
     * using the `addSubList()` method if the row count exceeds 25.
     * 
     * @param name The internal ID name of the sublist. The internal ID must be
     * in lowercase, contain no spaces, and include the prefix `custpage` if you
     * are adding the sublist to an existing page. For example, if you add a
     * sublist that appears on the UI as Purchase Details, the sublist internal
     * ID should be something equivalent to `custpage_purchasedetails` or
     * `custpage_purchase_details`.
     * 
     * @param type The sublist type. Use any of the following types:
     * 
     * - `editor` - An edit sublist with non-inline form fields (similar to the Address sublist)
     * 
     * - `inlineeditor` - An edit sublist with inline fields (similar to the Item sublist)
     * 
     * - `list` - A list sublist with editable fields (similar to the Billable Items sublist)
     * 
     * - `staticlist` - A read-only segmentable list sublist (similar to the search results sublist)
     * 
     * @param label The UI label for this sublist
     * @param tab The tab under which to display this sublist. If empty, the
     * sublist is added to the main tab.
     */
    addSubList(
        name: string,
        type: 'editor' | 'inlineeditor' | 'list' | 'staticlist',
        label: string,
        tab?: string
    ): nlobjSubList;

    /**
     * Adds a submit button to a form
     * 
     * @param label The UI label for this button. If no label is provided, the
     * label defaults to Save.
     * 
     * @since 2008.2
     */
    addSubmitButton(label?: string): nlobjButton;

    /**
     * Adds a subtab to a form and returns an nlobjTab object reference to it.
     * 
     * @param name The internal ID name of the subtab. The internal ID must be 
     * in lowercase, contain no spaces, and include the prefix `custpage` if you
     * are adding the subtab to an existing page. For example, if you add a
     * subtab that appears on the UI as **Purchase Details**, the subtab
     * internal ID should be something similar to `custpage_purchasedetails` or 
     * `custpage_purchase_details`.
     * 
     * @param label The UI label of the subtab
     * 
     * @param tab The tab under which to display this subtab. If empty, it is
     * added to the main tab.
     * 
     * @since 2008.2
     */
    addSubTab(name: string, label: string, tab?: string): nlobjTab;

    /**
     * Adds a tab to a form and returns an nlobjTab object reference to the tab
     * 
     * @param name The internal ID name of the tab. The internal ID must be in
     * lowercase, contain no spaces, and include the prefix `custpage` if you 
     * are adding the tab to an existing page. For example, if you add a tab 
     * that appears on the UI as **Purchase Details**, the tab internal ID
     * should be something equivalent to `custpage_purchasedetails` or 
     * `custpage_purchase_details`.
     * 
     * @param label The UI label of the tab
     * 
     * @since 2008.2
     */
    addTab(name: string, label: string): nlobjTab;

    /**
     * Returns an 
     * [nlobjButton](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3139249.html)
     * object by name
     * 
     * @param name The internal ID of the button. Internal IDs must be in 
     * lowercase and contain no spaces.
     * 
     * @since 2008.2
     */
    getButton(name: string): nlobjButton;

    /**
     * Returns an nlobjField object by name
     * 
     * @param name The internal ID name of the field. Internal ID names must be
     * in lowercase and contain no spaces.
     * 
     * @param radio If this is a radio field, specify which radio field to return
     * based on the radio value.
     */
    getField(name: string, radio?: string): nlobjField;

    /**
     * Returns an nlobjSubList object by name
     * 
     * @param name The internal ID name of the sublist. Internal ID names must 
     * be in lowercase and contain no spaces.
     * 
     * @since 2008.2
     */
    getSubList(name: string): nlobjSubList;

    /**
     * Returns an 
     * [nlobjTab](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3163084.html)
     * object by name
     * 
     * @param name The internal ID name of the tab. Internal ID names must be in
     * lowercase and contain no spaces.
     * 
     * @since 2008.2
     */
    getSubTab(name: string): nlobjTab;

    /**
     * Returns an nlobjTab object by name
     * 
     * @param name The internal ID name of the tab. Internal ID names must be in
     * lowercase and contain no spaces.
     * 
     * @since 2008.2
     */
    getTab(name: string): nlobjTab;

    /**
     * Returns an array of nlobjTab objects containing all the tabs in a form.
     * 
     * @since 2012.2
     */
    getTabs(): nlobjTab[];

    /**
     * Inserts a field (nlobjField) in front of another field and returns a
     * reference to it
     * 
     * @param field [nlobjField](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3140379.html)
     * object to insert
     * 
     * @param nextfld The name of the field you are inserting in front of
     * 
     * @since 2008.2
     */
    insertField(field: nlobjField, nextfld: string): nlobjField;

    /**
     * Inserts a sublist (nlobjSubList) in front of another sublist/subtab and
     * returns a reference to it
     * 
     * @param sublist [nlobjSubList](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3161033.html)
     * object to insert
     * 
     * @param nextsub The internal ID name of the sublist/subtab you are
     * inserting in front of
     * 
     * @since 2008.2
     */
    insertSubList(sublist: nlobjSubList, nextsub: string): nlobjSubList;

    /**
     * Inserts a subtab (nlobjTab) in front of another sublist/subtab and
     * returns a reference to it
     * 
     * @param subtab The internal ID name of the subtab. Internal ID names must 
     * be in lowercase and contain no spaces.
     * 
     * @param nextsub The name of the sublist/subtab you are inserting in front 
     * of
     * 
     * @since 2008.2
     */
    insertSubTab(subtab: string, nextsub: string): nlobjTab;

    /**
     * Inserts a tab (nlobjTab) in front of another tab and returns a reference 
     * to it
     * @param tab [nlobjTab](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3163084.html)
     * object to insert
     * 
     * @param nexttab The tab name for the tab you are inserting in front of
     * 
     * @since 2008.2
     */
    insertTab(tab: nlobjTab, nexttab: string): nlobjTab;

    /**
     * Removes an 
     * [nlobjButton](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3139249.html)
     * object. This method can be used on custom buttons and certain built-in
     * NetSuite buttons. For a list of built-in buttons that support this 
     * method, see the list of buttons in the section 
     * [Button IDs](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_N3265696.html)
     * in the NetSuite Help Center.
     * 
     * @param name The internal ID of the button to be removed. Internal IDs 
     * must be in lowercase and contain no spaces.
     * 
     * @since 2008.2
     */
    removeButton(name: string): void;

    /**
     * Sets the values of multiple fields on the current form. This API can be 
     * used in beforeLoad scripts to initialize field scripts on new records or 
     * non-stored fields. (See User 
     * [Event beforeLoad Operations](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N2962434.html#bridgehead_N2962507)
     * in the NetSuite Help Center for information on beforeLoad user event
     * triggers.)
     * 
     * @param values An associative array containing name/value pairs, which
     * maps field names to field values
     * 
     * @since 2008.2
     */
    setFieldValues(values: { [key: string]: string }): void;

    /**
     * Sets the Client SuiteScript file used for this form
     * 
     * @param script The scriptId or internal ID for the global client script
     * used to enable Client SuiteScript on this form
     * 
     * @since 2008.2
     */
    setScript(script: number | string): void;

    /**
     * Sets the title for this form
     * 
     * @param title The title used for this form
     * 
     * @since 2008.2
     */
    setTitle(title: string): void;
}

/**
 * Primary object used to encapsulate a list page. Note that the
 * [nlapiCreateList(title, hideNavbar)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3056572.html#bridgehead_N3057216)
 * function returns a reference to this object.
 */
declare interface nlobjList {

    /**
     * Adds an nlobjButton object to the footer of the page
     * 
     * @param name The internal ID name of the button. Internal ID names must be
     * in lowercase and contain no spaces. For example, if you add a button that
     * appears on the UI as Update Order, the internal ID should be something
     * equivalent to updateorder.
     * 
     * @param label The UI label used for this button
     * 
     * @param script The onclick button script function name
     * 
     * @since 2008.2
     */
    addButton(name: string, label: string, script?: string): void;

    /**
     * Adds an
     * [nlobjColumn](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3139838.html)
     * object to a list and returns a reference to this column
     * 
     * @param name The internal ID name of this column. Note that internal ID
     * names must be in lowercase and contain no spaces.
     * 
     * @param type The field type for this column. Use any of the following
     * field types:
     * 
     * - text
     * 
     * - email
     * 
     * - phone
     * 
     * - date
     * 
     * - currency
     * 
     * - float
     * 
     * - integer
     * 
     * - select
     * 
     * - url
     * 
     * - timeofday
     * 
     * - textarea
     * 
     * - percent
     * 
     * - inlinehtml
     * 
     * @param label The UI label for this column
     * @param align The layout justification for this column. Possible values include:
     * 
     * - center
     * 
     * - right
     * 
     * - left (default)
     * 
     * @since 2008.2
     */
    addColumn(
        name: string,
        type:
            'text' | 'email' | 'phone' | 'date' | 'currency' | 'float' |
            'integer' | 'select' | 'url' | 'timeofday' | 'textarea' |
            'percent' | 'inlinehtml',
        label: string,
        align?: 'center' | 'left' | 'right'
    ): nlobjColumn;


    /**
     * Adds an Edit or Edit/View column to Portlets (created with the
     * [nlobjPortlet]()
     * object) and Suitelet and Portlet lists (created with the
     * [nlobjList]()
     * object). Note that the Edit or Edit/View column will be added to the left
     * of a previously existing column.
     * 
     * @param column An 
     * [nlobjColumn]()
     * object to the left of which the Edit/View column will be added
     * 
     * @param showView If true then an Edit/View column will be added. Otherwise
     * only an Edit column will be added.
     * 
     * @param showHrefCol If set, this value must be included in row data 
     * provided for the list and will be used to determine whether the URL for
     * this link is clickable (specify T for clickable, F for non-clickable)
     * 
     * @since 2008.1
     */
    addEditColumn(
        column: nlobjColumn,
        showView?: boolean,
        showHrefCol?: boolean
    ): nlobjColumn;

    /**
     * Adds a navigation cross-link to the list page
     * 
     * @param type The type of navbar link to add. Use any of the following 
     * types:
     * 
     * - breadcrumb - appears on top-left corner after system bread crumbs
     * 
     * - crosslink - appears on top-right corner
     * 
     * @param title The UI text displayed in the link
     * 
     * @param url The URL used for this link
     * 
     * @since 2008.2
     */
    addPageLink(type: string, title: string, url: string): void;

    /**
     * Adds a row (Array of name/value pairs or nlobjSearchResult) to this
     * portlet.
     * 
     * @param row An Array of rows containing name/value pairs containing the 
     * values for corresponding 
     * [nlobjColumn](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3139838.html)
     * objects in this list -or- an 
     * [nlobjSearchResult](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3123296.html).
     * Note that several special fields: recordtype, id, and fieldname_display
     * (UI display value for select fields) are automatically added for each
     * search result.
     * 
     * @since 2008.2
     */
    addRow(row: nlobjSearchResult | { [key: string]: string }): void;

    /**
     * Adds multiple rows (Array of nlobjSearchResult objects or name/value pair
     * Arrays) to a portlet.
     * 
     * @param rows An Array of Arrays containing name/value pairs containing
     * column values for multiple rows -or- an Array of 
     * [nlobjSearchResult](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3123296.html)
     * objects containing the results of a search with columns matching the
     * columns on the list.
     */
    addRows(rows: nlobjSearchResult[] | { [key: string]: string }[]): void;

    /**
     * Sets the Client SuiteScript used for this page.
     * 
     * @param script scriptId or internal ID for global client script used to
     * enable Client SuiteScript on page
     * 
     * @since 2008.2
     */
    setScript(script: string | number): void;

    /**
     * Sets the display style for this list
     * @param style The display style value. Use any of the following styles:
     * 
     * - grid
     * 
     * - report
     * 
     * - plain
     * 
     * - normal
     */
    setStyle(style: 'grid' | 'report' | 'plain' | 'normal'): void;

    /**
     * Sets the title for this list
     * 
     * @param title The title for a list
     * 
     * @since 2008.2
     */
    setTitle(title: string): void;
}

/**
 * Primary object used to encapsulate scriptable dashboard portlets. Using
 * SuiteScript you can create a LIST, FORM, HTML, or LINKS type of portlet.
 */
declare interface nlobjPortlet {

    /**
     * Adds an nlobjColumn object to a list and returns a reference to this
     * column. Note that this API is only available if the portlet type is a
     * LIST type. (In the NetSuite Help Center, see Portlet Scripts for portlet
     * type definitions. This section also shows how to define your portlet type
     * on the portlet Script record page in the NetSuite UI.)
     * 
     * @param name The internal ID name of this column. Internal ID names must
     * be in lowercase and contain no spaces.
     * 
     * @param type The field type for this column. Use any of the following
     * field types:
     * 
     * - text
     * 
     * - email
     * 
     * - phone
     * 
     * - date
     * 
     * - currency
     * 
     * - float
     * 
     * - integer
     * 
     * - checkbox
     * 
     * - select
     * 
     * - url
     * 
     * - timeofday
     * 
     * - textarea
     * 
     * - percent
     * 
     * - inlinehtml
     * @param label The UI label for this column
     * 
     * @param just The layout justification for this column. Use any of the
     * following layout types:
     * 
     * - center
     * 
     * - right
     * 
     * - left - (default)
     * 
     * @since 2008.2
     */
    addColumn(
        name: string,
        type:
            'text' | 'email' | 'phone' | 'date' | 'currency' | 'float' |
            'integer' | 'checkbox' | 'select' | 'url' | 'timeofday' |
            'textarea' | 'percent' | 'inlinehtml',
        label: string,
        just?:
            'center' | 'right' | 'left'
    ): nlobjColumn;

    /**
     * Adds an Edit or Edit|View column to LIST portlets (see figure). This
     * method can also be used with nlobjList when creating Suitelet lists and
     * portlet lists. Note that the Edit or Edit|View column will be added to
     * the left of a previously existing column.
     * 
     * @param column An 
     * [nlobjColumn]() 
     * object to the left of which the Edit|View column will be added
     * 
     * @param showView If true then an Edit|View column will be added. Otherwise
     * only an Edit column will be added.
     * 
     * @param showHrefCol If set, this value must be included in row data
     * provided for the list and will be used to determine whether the URL for
     * this link is clickable (specify T for clickable, F for non-clickable)
     * 
     * @since 2008.1
     */
    addEditColumn(
        column: nlobjColumn,
        showView?: boolean,
        showHrefCol?: string
    ): nlobjColumn;

    /**
     * Adds an nlobjField object to a portlet and returns a reference to it.
     * 
     * This API is only available if the portlet type is FORM. (In the NetSuite
     * Help Center, see 
     * [Portlet Scripts](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_N2989989.html)
     * for portlet type definitions. This section also shows how to define your
     * portlet type on the portlet Script record page in the NetSuite UI.)
     * 
     * @param name The internal ID name of this field. Internal ID names must be
     * in lowercase and contain no spaces.
     * 
     * @param type 
     * @param label The UI label for this field
     * 
     * @param source The internalId or scriptId of the source list for this
     * field if it's a select (List/Record) field, or radio value for radio
     * fields. In the NetSuite Help Center, see 
     * [List/Record Type IDs](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3144618.html#bridgehead_N3148193)
     * for the internal IDs of all supported list/record types.
     * 
     * @since 2008.2
     */
    addField(
        name: string,
        type:
            'text' | 'email' | 'phone' | 'date' | 'currency' | 'float' |
            'integer' | 'checkbox' | 'select' | 'url' | 'timeofday' |
            'textarea' | 'percent' | 'inlinehtml',
        label: string,
        source?: string | number
    ): nlobjField;

    /**
     * Adds a line (containing text or basic HTML) with optional indenting and
     * URL to a LINKS portlet.
     * 
     * This API is only available if the portlet type is LINKS.
     * (In the NetSuite Help Center, see 
     * [Portlet Scripts](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_N2989989.html)
     * for portlet type definitions. This section also shows how to define your
     * portlet type on the portlet Script record page in the NetSuite UI.)
     * 
     * @param text Content written to this line (can contain basic HTML
     * formatting)
     * 
     * @param url URL if this line should be clickable (if NULL then line will
     * not be clickable)
     * 
     * @param indent Indent level used for this line. Valid values are 0 to 5.
     * 
     * @since 2008.2
     */
    addLine(
        text: string,
        url?: string,
        indent?: number
    ): void;

    /**
     * Adds a row (nlobjSearchResult) or Array of name/value pairs) to a
     * **LIST** portlet.
     * 
     * This API is only available if the portlet type is **LIST**. (In the 
     * NetSuite Help Center, see
     * [Portlet Scripts](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_N2989989.html)
     * for portlet type definitions. This section also shows how to define your
     * portlet type on the portlet Script record page in the NetSuite UI.)
     * 
     * @param row An Array of rows containing name/value pairs containing the
     * values for corresponding `nlobjColumn` objects in this list -or- an
     * `nlobjSearchResult`. Note that several special fields: recordtype, id, and
     * fieldname_display (display value for select fields) are automatically
     * added for each search result.
     * 
     * @since 2008.2
     */
    addRow(row: { [key: string]: string } | nlobjSearchResult): void;

    /**
     * Adds multiple rows (Array of nlobjSearchResult objects or name/value pair
     * Arrays) to a **LIST** portlet.
     * 
     * This API is only available if the portlet type is **LIST**. (In the 
     * NetSuite Help Center, see
     * [Portlet Scripts](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_N2989989.html)
     * for portlet type definitions. This section also shows how to define your
     * portlet type on the portlet Script record page in the NetSuite UI.)
     * 
     * @param rows An Array of Arrays containing name/value pairs containing
     * column values for multiple rows -or- an Array of 
     * [nlobjSearchResult]()
     * objects containing the results of a search with columns matching the
     * columns on the list.
     * 
     * @since 2008.2
     */
    addRows(rows: { [key: string]: string } | nlobjSearchResult[]): void;

    /**
     * Sets the entire content of an HTML portlet (content will be placed inside
     * <TD>...</TD> tags).
     * 
     * This API is only available if the portlet type is HTML. (In the NetSuite
     * Help Center, see 
     * [Portlet Scripts](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_N2989989.html)
     * for portlet type definitions. This section also shows how to define your
     * portlet type on the portlet Script record page in the NetSuite UI.)
     * @param html Raw HTML containing the contents of an HTML portlet. The
     * content must start and end with a TD tag.
     * 
     * @since 2008.2
     */
    setHtml(html: string): void;

    /**
     * Sets the regular interval when a **FORM** portlet automatically refreshes
     * itself.
     * 
     * This API is only available if the portlet type is **FORM**. (In the
     * NetSuite Help Center, see
     * [Portlet Scripts](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_N2989989.html)
     * for portlet type definitions. This section also shows how to define your
     * portlet type on the portlet Script record page in the NetSuite UI.)
     * 
     * @param n Number of seconds. In production mode, this value must be at
     * least 60 seconds. An error is raised if this value is less than zero, and
     * in production if it is less than 60.
     * 
     * @since 2011.1
     */
    setRefreshInterval(n: number): void;

    /**
     * Sets the client-side script for a FORM portlet. For example, you can use 
     * this method to call a script to implement client-side validation, 
     * dynamically calculate field totals, and change data based on the value of 
     * another field. Note that you can only set one script. Setting another 
     * script implicitly removes the previous script.
     * 
     * This API is only available if the portlet type is **FORM**. (In the 
     * NetSuite Help Center, see 
     * [Portlet Scripts](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_N2989989.html) 
     * for portlet type definitions. This section also shows how to define your 
     * portlet type on the portlet Script record page in the NetSuite UI.)
     * @param scriptid The script internalId or custom scriptId of a
     * record-level client script. Scripts of this type are deployed globally
     * and run against an entire record type. For more information, see
     * [Form-level and Record-level Client Scripts](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N2960161.html).
     * 
     * @since 2011.1
     */
    setScript(scriptid: string | number): void;

    /**
     * @param url The URL that the FORM will be POST-ed to when the user clicks
     * this submit button
     * 
     * @param label The UI label used for displaying this button. If a value is
     * not specified, the default value is **Save**.
     * 
     * @param target The target attribute of the portlet's FORM element, if it
     * is different from the portlet's own embedded iframe. Supported values
     * include standard HTML target attributes such as '_top', '_parent', and
     * '_blank', frame names, and the special NetSuite-specific identifier
     * '_hidden'.
     * 
     * Setting the target to '_hidden' allows submission to a backend that
     * returns results to a hidden child iframe within the portlet's embedded
     * iframe, so that these results do not replace portlet content. For
     * example, a custom form portlet could submit to a backend suitelet, and if
     * the suitelet returns an error, it is displayed in the hidden child iframe
     * and does not change other portlet contents.
     * 
     * @since 2008.2
     */
    setSubmitButton(
        url: string,
        label?: string,
        target?: string
    ): nlobjButton;

    /**
     * Sets the portlet title
     * 
     * @param title The title used for this portlet
     * 
     * @since 2008.2
     */
    setTitle(title: string): void;
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

    /**
     * Sets values for multiple lines (Array of nlobjSearchResult objects or 
     * name/value pair Arrays) in a sublist.
     * 
     * @param values An Array of Arrays containing name/value pairs containing 
     * column values for multiple rows -or- an Array of
     * [nlobjSearchResult](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3123296.html)
     * objects containing the results of a search with columns matching the 
     * fields on the sublist. Note that several special fields: recordtype, id, 
     * and fieldname_display (UI display value for select fields) are 
     * automatically added for each search result.
     * 
     * @since 2008.2
     */
    setLineItemValues(values: { string: string }[] | nlobjSearchResult[]): void;

    /**
     * Use this method to designate that a certain field on a sublist must 
     * contain a unique value. This method is available on inlineeditor and 
     * editor sublists only.
     * 
     * @param name The internal ID of the sublist field that you want to make 
     * unique
     * 
     * @since 2009.2
     */
    setUniqueField(name: string): nlobjField;
}

/**
 * Primary object used to encapsulate tabs and subtabs. Note that to add a tab
 * or subtab, you must first create a custom form using
 * [nlapiCreateForm(title, hideNavbar)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3056572.html#bridgehead_N3057076),
 * which returns an
 * [nlobjForm](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3144618.html)
 * object.
 * 
 * After the form object is instantiated, you can add a new tab or subtab to the
 * form using the nlobjForm.
 * [addTab(name, label)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3144618.html#bridgehead_N3151233) 
 * or nlobjForm.
 * [addSubTab(name, label, tab)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3144618.html#bridgehead_N3151039)
 * methods, which both return a reference to `nlobjTab`.
 */
declare interface nlobjTab {

    /**
     * Sets the tab UI label
     * 
     * @param label The UI label used for this tab or subtab
     * 
     * @since 2008.2
     */
    setLabel(label: string): nlobjTab;

    /**
     * Sets the inline help used for this tab or subtab
     * 
     * @param help Inline help used for this tab or subtab
     * 
     * @since 2008.2
     */
    setHelpText(help: string): nlobjTab;
}

declare interface nlobjTemplateRenderer {

    /**
     * Passes in raw string of template to be transformed by FreeMarker.
     * 
     * @param template raw string of template
     * 
     * @since 2013.1
     */
    setTemplate(template: string): void;

    /**
     * Binds nlobjRecord object to variable name used in template.
     * 
     * @param variable variable name that represents record
     * 
     * @param record NetSuite record
     * 
     * @since 2013.1
     */
    addRecord(variable: string, record: nlobjRecord): void;

    /**
     * Binds 
     * [nlobjSearchResult](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3123296.html)
     * object to variable name used in template.
     * 
     * @param variable variable name that represents search result
     * 
     * @param searchResult NetSuite search result
     * 
     * @since 2013.1
     */
    addSearchResults(variable: string, searchResult: nlobjSearchResult): void;

    /**
     * Returns template content interpreted by FreeMarker as XML string that can
     * be passed to nlapiXMLToPDF(xmlstring) to produce PDF output.
     * 
     * @returns XML string of template interpreted by FreeMarker
     * 
     * @since 2013.1
     */
    renderToString(): string;

    /**
     * Renders HTML output to 
     * [nlobjResponse](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3109660.html)
     * object.
     * 
     * @returns HTML output to an HTTP response object
     * 
     * @since 2013.1
     */
    renderToResponse(): void;
}

/*
   --------------------------------------------------

           APPLICATION NAVIGATION APIS

   --------------------------------------------------
*/

/**
 * Requests an HTTP(s) URL (internal or external). Note a timeout occurs if the 
 * initial connection takes > 5 seconds and/or the request takes > 45 to 
 * respond.
 * 
 * `nlapiRequestURL` automatically encodes binary content using base64 
 * representation, since JavaScript is a character-based language with no 
 * support for binary types. This means you can take the contents returned and 
 * save them in the NetSuite file cabinet as a file or stream them directly to a 
 * response.
 * 
 * 
 * @param url The HTTP(s) URL being requested - (fully qualified unless NetSuite 
 * page)
 * 
 * @param postdata Body used for a POST request. It can either be an object of 
 * form parameters or a string. If set to null, then a GET request is used.
 * 
 * @param headers An object of header and header value pairs. Be aware that 
 * certain headers cannot be set manually. If a script attempts to set a value 
 * for any of these headers, the value is discarded. These headers include the 
 * following: Connection, Content-Length, Host, Trailer, Transfer-Encoding, 
 * Upgrade, and Via.
 * 
 * @param callback A callback function called when the request is completed (
 * **client SuiteScript only**). `IMPORTANT`: There is NO **callback** parameter 
 * when you use `nlapiRequestURL` in a server-side call. In a server-side call, 
 * **httpMethod** becomes the fourth parameter for this API, as in: 
 * 
 * ```js
 * nlapiRequestURL(url, postdata, headers, httpMethod)
 * ```
 * 
 * @param httpMethod Specify the appropriate http method to use for your
 * integration. `IMPORTANT`: When using nlapiRequestURL in a server-side script, 
 * **httpMethod** becomes the fourth parameter. In other words, the function 
 * signature in a server-side script is 
 * 
 * ```js
 * nlapiRequestURL(url, postdata, headers, httpMethod).
 * ```
 * 
 * Supported http methods are HEAD, DELETE and PUT. This parameter allows for 
 * easier integration with external RESTful services using the standard REST 
 * functions. Note that if the httpMethod parameter is empty or not specified, 
 * this behavior is followed: the method is POST if postdata is not empty. The 
 * method is GET if it is.
 * 
 * Be aware that the httpMethod parameter overrides, so you can specify GET and 
 * specify postdata, NetSuite will do a GET and ignore the postdata.
 * 
 * @returns nlobjResponse object (or void if a callback function has been
 * specified)
 * 
 * @throws SSS_CONNECTION_CLOSED (with “Connection Closed” message) — if the 
 * connection is closed because the server associated with the URL is 
 * unresponsive
 * 
 * @throws SSS_CONNECTION_TIME_OUT — if the initial connection exceeds the 5 
 * second timeout period
 * 
 * @throws SSS_INVALID_HOST_CERT — if the client and server could not negotiate 
 * the desired level of security. The connection is no longer usable.
 * 
 * @throws SSS_INVALID_URL (with “Invalid URL — Connection Closed” message) — if 
 * the connection is closed due to an invalid URL, including those containing 
 * white space
 * 
 * @throws SSS_REQUEST_TIME_EXCEEDED — if the request exceeds the 45 second 
 * timeout period
 * 
 * @throws SSS_UNKNOWN_HOST — if the IP address of a host could not be 
 * determined.
 * 
 * @throws SSS_UNSUPPORTED_ENCODING — if the character encoding is not 
 * supported
 */
declare function nlapiRequestURL(
    url: string,
    postdata?: string | any,
    headers?: any,
    callback?: () => void,
    httpMethod?: string
): nlobjResponse | void;

/**
 * Supports the sending of credentials outside of NetSuite. This API securely 
 * accesses a handle to credentials that users specify in a NetSuite credential 
 * field.
 * 
 * Usage metering allowed for this API is 10 units.
 * 
 * Supported Script Types:
 * - User Event
 * 
 * - Scheduled Script
 * 
 * - Portlet
 * 
 * - Suitelet
 * 
 * 
 * @param credentials List of credential handles. This API does not know where 
 * you have stored the data, it only knows the credentials to use by handle. 
 * Therefore, if you have multiple credentials for a single call, you need a 
 * list. The handles are 32 byte, globally unique strings (GUIDs).
 * 
 * @param url The HTTPS URL being requested - (fully qualified unless it is a 
 * NetSuite page).
 * 
 * @param postdata  Body used for a POST request. It can be a string, an 
 * `nlobjCredentialBuilder` object, an associative array of form parameter 
 * pairs, or an associative array of form parameter and `nlobjCredentialBuilder` 
 * object pairs. If set to null, then a GET request is used.
 * 
 * @param headers Can be an nlobjCredentialBuilder object, an associative array 
 * of header and header value pairs, or an associative array of header and 
 * nlobjCredentialBuilder object pairs. Be aware that certain headers cannot be 
 * set manually. If a script attempts to set a value for any of these headers, 
 * the value is discarded. These headers include the following: Connection, 
 * Content-Length, Host, Trailer, Transfer-Encoding, Upgrade, and Via.
 * 
 * @param httpsMethod Specify the appropriate http method to use for your 
 * integration. Supported http methods are HEAD, DELETE and PUT. This parameter 
 * allows for easier integration with external RESTful services using the 
 * standard REST functions. Note that if the httpsMethod parameter is empty or 
 * not specified, this behavior is followed: the method is POST if postdata is 
 * not empty. The method is GET if it is.
 * 
 * @since 2012.1
 */
declare function nlapiRequestURLWithCredentials(
    credentials: string[],
    url: string | nlobjCredentialBuilder,
    postdata:
        string | nlobjCredentialBuilder |
        { [key: string]: string | nlobjCredentialBuilder },
    headers
        : nlobjCredentialBuilder |
        { [key: string]: string | nlobjCredentialBuilder },
    httpsMethod: 'HEAD' | 'DELETE' | 'PUT'
)

/**
 * Creates a URL on-the-fly by passing URL parameters from within your 
 * SuiteScript. For example, when creating a SuiteScript Portlet script, you may 
 * want to create and display the record URLs for each record returned in a 
 * search.
 * 
 * When creating the URL, you can use either the RECORD reference as retrieved 
 * in a search result or a known TASKLINK. Each page in NetSuite has a unique 
 * Tasklink Id associated with it for a record type. Refer to the SuiteScript 
 * Reference Guide for a list of available NetSuite tasklinks.
 * 
 * This API is supported in client, user event, scheduled, portlet, Suitelet, 
 * and RESTlet scripts.
 * 
 * @param type The base type for this resource. These types include:
 * 
 * - RECORD – Record Type
 * 
 * - TASKLINK – Task Link
 * 
 * - SUITELET – Suitelet
 * 
 * - RESTLET – RESTlet
 * 
 * @param identifier The primary id for this resource (recordType for RECORD,
 * scriptId for SUITELET)
 * 
 * @param id The primary id for this resource (recordType for RECORD, scriptId 
 * for SUITELET)
 * 
 * @param displayMode If the type argument is set to RECORD, set displayMode to 
 * either VIEW or EDIT to return a URL for the record in EDIT mode or VIEW mode. 
 * Note that even for RECORD calls, the displayMode argument is optional. The 
 * default value is VIEW.
 * 
 * @returns Depending on the values specified for the type and displayMode 
 * arguments, returns URL string to an internal NetSuite resource or an 
 * external/internal URL to a Suitelet or RESTlet.
 * 
 * @throws  SSS_INVALID_URL_CATEGORY
 * 
 * @throws SSS_CATEGORY_ARG_REQD
 * 
 * @throws SSS_INVALID_TASK_ID
 * 
 * @throws SSS_TASK_ID_REQD
 * 
 * @throws SSS_INVALID_INTERNAL_ID
 * 
 * @throws SSS_INVALID_EDITMODE_ARG
 */
declare function nlapiResolveURL(
    type:
        'RECORD' | 'TASKLINK' | 'SUITELET' | 'RESTLET',
    identifier: string,
    id?: string,
    displayMode?: string | boolean
): string;

/**
 * Sets the redirect URL by resolving to a NetSuite resource. Note that all 
 * parameters must be prefixed with **custparam** otherwise an SSS_INVALID_ARG 
 * error will be thrown.
 * 
 * This API is supported in beforeLoad and synchronous afterSubmit user events; 
 * it is also supported in Suitelet scripts. Note that nlapiSetRedirectURL is 
 * ignored in beforeSubmit and asynchronous afterSubmit user events.
 * 
 * You can use nlapiSetRedirectURL to customize navigation within NetSuite. In a 
 * user event script, you can use nlapiSetRedirectURL to send the user to a 
 * NetSuite page based on a specific user event. For example, under certain 
 * conditions you may choose to redirect the user to another NetSuite page or 
 * custom Suitelet to complete a workflow.
 * 
 * @param type The base type for this resource. The types include:
 * 
 * - **RECORD** : Record type - - Note that when you set type to RECORD, and the 
 * third param ( id ) to null, the redirection is to the “create new” record 
 * page, not an existing record page.
 *
 * - **TASKLINK** : Tasklink
 *
 * - **SUITELET** : Suitelet
 * 
 * - **EXTERNAL** : The URL of a Suitelet that is available externally (for 
 * example, Suitelets that have been set to “Available without Login” on the 
 * Script Deployment page)
 * 
 * @param identifier The primary id for this resource (recordType for RECORD, 
 * scriptId for SUITELET, taskId for TASKLINK, url for EXTERNAL)
 * 
 * @param id The secondary id for this resource (recordId for RECORD, 
 * deploymentId for SUITELET).
 * 
 * @param editmode For RECORD calls, this determines whether to return a URL for 
 * the record in edit mode or view mode. If set to true, returns the URL to an 
 * existing record in edit mode.
 * 
 * @param parameters An associative array of additional URL parameters.
 * 
 * @throws SSS_INVALID_ARG
 *
 * @throws SSS_INVALID_URL_CATEGORY
 * 
 * @throws SSS_CATEGORY_ARG_REQD
 * 
 * @throws SSS_INVALID_TASK_ID
 * 
 * @throws SSS_TASK_ID_REQD
 * 
 * @throws SSS_INVALID_INTERNAL_ID
 * 
 * @throws SSS_INVALID_EDITMODE_ARG
 */
declare function nlapiSetRedirectURL(
    type:
        'RECORD' | 'TASKLINK' | 'SUITELET' | 'EXTERNAL',
    identifier: string,
    id?: string,
    editmode?: string,
    parameters?: { [key: string]: string }
)

/**
 * Primary object used for scripting web responses in Suitelets. Note that the 
 * [nlapiRequestURL(url, postdata, headers, callback, httpMethod)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3059035.html#bridgehead_N3059142)
 * function returns a reference to this object.
 * 
 * When creating Suitelets you will pass request and response arguments to your 
 * user-defined function (see example). With the response object instantiated, 
 * you can then call any nlobjResponse method.
 * 
 * See 
 * [Supported File Types](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_N3264137.html)
 * in the NetSuite Help Center for a list of allcontent/media types that can be 
 * returned through the nlobjResponse object.
 */
declare interface nlobjResponse {
    /**
     * Adds a header to the response. If this header has already been set, this 
     * will add a new header to the response. Note that all user-defined headers
     * must be prefixed with **Custom-Header** otherwise an `SSS_INVALID_ARG`
     * error will be thrown ()
     * 
     * @param name The name of the header
     * 
     * @param value The value used to set header
     * 
     * @throws SSS_INVALID_ARG
     * 
     * @since 2008.2
     */
    addHeader(name: string, value: string): void;

    /**
     * Returns an Array containing all the headers returned in the response.
     * Only available in the return value of a call to 
     * [nlapiRequestURL(url, postdata, headers, callback, httpMethod)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3059035.html#bridgehead_N3059142).
     * 
     * @returns String[] of headers
     * 
     * @since 2008.2
     */
    getAllHeaders(): string[];

    /**
     * Returns the body returned by the server. Only available in the return
     * value of a call to
     * [nlapiRequestURL(url, postdata, headers, callback, httpMethod)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3059035.html#bridgehead_N3059142).
     * 
     * @returns The string value of the body
     */
    getBody(): string;

    /**
     * Returns the response code returned by the server. Only available in the
     * return value of a call to
     * [nlapiRequestURL(url, postdata, headers, callback, httpMethod)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3059035.html#bridgehead_N3059142).
     * 
     * @returns The string value of the response code
     */
    getCode(): string;

    /**
     * Returns the 
     * [nlobjError](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3086264.html)
     * thrown during request. Only available in the return value of call to 
     * `nlapiRequestURL` in Client SuiteScript.
     * 
     * @returns 2008.2
     */
    getError(): nlobjError;

    /**
     * Returns the value for a header returned in the response. Only available
     * in the return value of a call to 
     * [nlapiRequestURL(url, postdata, headers, callback, httpMethod)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3059035.html#bridgehead_N3059142).
     * 
     * @param name The header name
     * 
     * @returns The string value of the header
     * 
     * @since 2008.2
     */
    getHeader(name: string): string;

    /**
     * Returns an Array containing all the values for a header returned in the
     * response. This is only available in the return value of a call to 
     * `nlapiRequestURL`.
     * 
     * @param name The header name
     * 
     * @returns String[] of header values
     * 
     * @since 2008.2
     */
    getHeaders(name: string): string[];

    /**
     * Generates, and renders, a PDF directly to a response. Use renderPDF to
     * generate PDFs without first importing a file to the file cabinet. This 
     * method is useful if your script does not have NetSuite file cabinet
     * permissions.
     * 
     * The renderPDF method uses the Big Faceless Report Generator built by Big
     * Faceless Organization (BFO). The BFO Report Generator is a third-party
     * library used for converting XML to PDF documents. The renderPDF method
     * passes XML to the BFO tag library (which is stored by NetSuite), and
     * renders a PDF directly to a response. Note that the xmlString argument is
     * the same input string as that passed to BFO by
     * [nlapiXMLToPDF(xmlstring)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3062490.html#bridgehead_N3066595).
     * 
     * For details on BFO, available tags, and BFO examples, see the following links:
     * 
     * - http://faceless.org/products/report/docs/userguide.pdf
     * 
     * - http://faceless.org/products/report/docs/tags/
     * 
     * @param xmlString Content of your PDF, passed to renderPDF as a string.
     * 
     * @since 2014.2
     */
    renderPDF(xmlString: string): void;

    /**
     * Sets CDN caching for a shorter period of time or a longer period of time.
     * There is no ability to invalidate individual assets, so SSP Application
     * can set its TTL (Time To Live) in CDN and fall into one of four
     * categories:
     * 
     * - **Unique** — This asset is not cached.
     * 
     * - **Short** — This asset may change frequently, so cache it for five
     * minutes.
     * 
     * - **Medium** — This asset may or may not change frequently, so cache it
     * for two hours.
     * 
     * - **Long** — This asset is not expected to change frequently, so cache it
     *  for seven days.
     * 
     * @param type Constant value to represent the caching duration:
     *
     * - CACHE_DURATION_UNIQUE
     * 
     * - CACHE_DURATION_SHORT
     * 
     * - CACHE_DURATION_MEDIUM
     * 
     * - CACHE_DURATION_LONG
     * 
     * Note that when setting constant values, you do not use quotation marks.
     * The syntax will be something similar to:
     * 
     * setCDNCacheable( response.CACHE_DURATION_SHORT);
     * 
     * @since 2013.1
     */
    setCDNCacheable(type:
        'CACHE_CACHE_DURATION_UNIQUE' | 'CACHE_DURATION_SHORT' |
        'CACHE_DURATION_MEDIUM' | 'CACHE_DURATION_LONG'
    ): void;

    /**
     * Sets the content type for the custom responses (and an optional file name
     * for binary output). This API is available in Suitelet scripts only.
     * 
     * @param type The content/file type. For a list of supported file types, 
     * see 
     * [Supported File Types]() 
     * in the NetSuite Help Center.
     * 
     * @param name Set the name of the file being downloaded (for example 
     * 'name.pdf')
     * 
     * @param disposition Content disposition to use for file downloads.
     * Available values are **inline or attachment**. If a value is not
     * specified, the parameter will default to **attachment**. What this means 
     * is that instead of a new browser (or Acrobat) launching and rendering the
     * content, you will instead be asked if you want to download and Save the
     * file.
     * 
     * @since 2008.2
     */
    setContentType(
        type: string,
        name?: string,
        disposition?: 'inline' | 'attachment'
    ): void;

    /**
     * Sets the character encoding on nlobjResponse content. Available encoding types are:
     * 
     * - Unicode (UTF-8)
     * 
     * - Western (Windows 1252)
     * 
     * - Western (ISO-8859–1)
     * 
     * - Chinese Simplified (GB 18030)
     * 
     * - Chinese Simplified (GB 2312)
     * 
     * - Japanese (Shift-JIS)
     * 
     * - Western (Mac Roman)
     * 
     * - The default encoding type is Unicode (UTF-8).
     * 
     * Your browser character encoding settings must match the specified encoding to view the file contents correctly.
     * 
     * @param encodingType he type of encoding for the response. Use one of the following case sensitive values:
     * 
     * - UTF-8
     * 
     * - windows-1252
     * 
     * - ISO-8859-1
     * 
     * - GB18030
     * 
     * - GB2312 - GB2312 is not a valid argument when setting the encoding for
     * a new file.  
     * 
     * - SHIFT_JIS
     *
     * - MacRoman
     * 
     * @since 2013.1
     */
    setEncoding(
        encodingType:
            'UTF-8' | 'windows-1252' | 'ISO-8859-1' | 'GB18030' | 'GB2312' |
            'SHIFT_JIS' | 'MacRoman'
    ): void;

    /**
     * Sets the value of a response header. Note that all user-defined headers
     * must be prefixed with **Custom-Header** otherwise an SSS_INVALID_ARG or 
     * SSS_INVALID_HEADER error will be thrown.
     * 
     * @param name The name of the header
     * 
     * @param value The value used to set header
     * 
     * @throws SSS_INVALID_ARG, SSS_INVALID_HEADER
     * 
     * @since 2008.2
     */
    setHeader(name: string, value: string): void;

    /**
     * Sets the redirect URL by resolving to a NetSuite resource. Note that all 
     * parameters must be prefixed with **custparam** otherwise an 
     * SSS_INVALID_ARG error will be thrown.
     *
     * Also note that all URLs must be internal unless the Suitelet is being
     * executed in an “Available without Login” context. If this is the case,
     * then within the “Available without Login” (externally available)
     * Suitelet, you can set the type parameter to **EXTERNAL** and the
     * identifier parameter to the external URL.
     * 
     * @param type The base type for this resource
     *  
     * - **RECORD** - Record Type
     *  
     * - **TASKLINK** - Task Link
     *  
     * - **SUITELET** - Suitelet
     *  
     * - **EXTERNAL** - Custom URL (external) and only available for external
     * Suitelets (i.e. available without login)
     * 
     * @param identifier  The primary id for this resource (record type ID for
     * RECORD, scriptId for SUITELET, taskId for tasklink, url for EXTERNAL)
     * 
     * @param id The secondary id for this resource (record type ID for RECORD,
     * deploymentId for SUITELET)
     * 
     * @param editmode For RECORD calls, this determines whether to return a URL
     * for the record in edit mode or view mode. If set to true, returns the URL
     * to an existing record in edit mode, otherwise the record is returned in
     * view mode.
     * 
     * @param parameters An associative array of additional URL parameters as
     * name/value pairs
     * 
     * @throws SSS_INVALID_ARG
     * 
     * @since 2008.2
     */
    sendRedirect(
        type: string,
        identifier: string,
        id?: string,
        editmode?: string,
        parameters?: { [key: string]: string }
    ): void;

    /**
     * Write information (text/xml/html) to the response
     * 
     * @param output String or file being written
     */
    write(output: string | nlobjFile): void;

    /**
     * Write line information (text/xml/html) to the response
     * 
     * @param output String being written
     * 
     * @since 2008.2
     */
    writeLine(output: string): void;

    /**
     * Generates a page using a page element object (nlobjForm or nlobjList)
     * 
     * @param pageobject Standalone page object: nlobjForm or nlobjList
     * 
     * @since 2008.2
     */
    writePage(pageobject: nlobjList | nlobjForm): void;
}

/**
 * Primary object used to encapsulate an HTTP GET or POST request. When creating
 * Suitelets, you pass request and response arguments to your user-defined
 * function (see example). With the request object instantiated, you can then
 * call any nlobjRequest method.
 */
declare interface nlobjRequest {
    /**
     * Returns an Array containing all of the request headers and their values.
     * 
     * @returns Associative Array of header name/value pairs. This array
     * typically includes two iterations of each name/value pair: one with the
     * name represented in lower case, and one with the name in title case.
     * 
     * @since 2008.2
     */
    getAllHeaders(): any;

    /**
     * Returns an Object containing all the request parameters and their values
     * 
     * @returns String[] of parameter field names
     * 
     * @since 2008.2
     */
    getAllParameters(): string[];

    /**
     * Returns the body of the POST request
     * 
     * @returns The string value of the request body
     * 
     * @since 2008.1
     */
    getBody(): string;

    /**
     * Returns a file reference (nlobjFile object) added to a Suitelet page with 
     * the nlobjForm.
     * [addField(name, type, label, sourceOrRadio, tab)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3144618.html#bridgehead_N3147714) 
     * method (where ‘file’ is passed in as the type argument).
     * 
     * @param id The id of the file
     * 
     * @since 2010.1
     */
    getFile(id: number): nlobjFile;

    /**
     * Returns the value of a request header.
     * 
     * @param name The name of the header. This input is handled in a
     * case–insensitive manner.
     * 
     * @returns The header value as a string
     * 
     * @since 2008.2
     */
    getHeader(name: string): string;

    /**
     * Returns the number of lines in a sublist
     * 
     * @param group The sublist internal ID (for example, use addressbook as the 
     * ID for the Address sublist). See 
     * [Using the SuiteScript Records Browser](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html) for sublists that support 
     * SuiteScript, sublist internal IDs, and sublist field IDs.
     * 
     * @since 2008.2
     */
    getLineItemCount(group: string): number;

    /**
     * Returns the value of a sublist line item.
     * 
     * @param group The sublist internal ID (for example, use addressbook as the 
     * ID for the Address sublist). See 
     * [Using the SuiteScript Records Browser](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3169730.html) for sublists that support 
     * SuiteScript, sublist internal IDs, and sublist field IDs.
     * 
     * @param name The name of the field whose value is returned
     * 
     * @param line The line number for this field. Note the first line number on
     * a sublist is 1 (not 0).
     * 
     * @returns The string value of the line item
     * 
     * @since 2008.2
     */
    getLineItemValue(group: string, name: string, line: number): string;

    /**
     * Returns the METHOD of the request.
     * 
     * @returns The string value of the request type. Request types include
     * GET or POST.
     * 
     * @since 2008.1
     */
    getMethod(): 'GET' | 'PUT' | 'POST' | 'DELETE';

    /**
     * Returns the value of the request parameter
     * 
     * @param name The name of the request parameter whose value is returned
     * 
     * @returns The string value of the request parameter
     * 
     * @since 2008.2
     */
    getParameter(name: string): string;

    /**
     * Returns the values of a request parameter as an Array
     * 
     * @param name The name of the request parameter whose value is returned
     * 
     * @since 2008.2
     */
    getParameterValues(name: string): string[];

    /**
     * Returns the full URL of the request for SSP files
     * 
     * @returns The string value of the request URL for SSP files.
     * 
     * @since 2015.2
     */
    getSSPURL(): string;

    /**
     * Returns the full URL of the request
     * 
     * @returns The string value of the request URL
     * 
     * @since 2008.1
     */
    getURL(): string;
}

/**
 * The `nlobjCredentialBuilder` object encapsulates a request string that can be 
 * passed to 
 * [nlapiRequestURLWithCredentials(credentials, url, postdata, headers, 
 * httpsMethod)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3059035.html#bridgehead_N3059544). 
 * Six methods are included that perform various string transformations: three 
 * hash methods for SHA-1, SHA-256, and MD5 hashing, two encoding methods for 
 * Base64 and UTF8 encoding, a character replacement method, and an appending 
 * method.
 */
declare class nlobjCredentialBuilder {

    /**
     * 
     * @param requestString include an embedded GUID 
     * (globally unique string).
     * @param domainString URL’s host name. Host name must exactly match the 
     * host name in your URL. For example, if your URL is 
     * `https://payment.ns.com/process.money?passwd={GUID}`, the host name passed 
     * in must be ‘payment.ns.com’.
     */
    constructor(requestString: string, domainString: string);

    /**
     * Appends an nlobjCredentialBuilder object to another 
     * `nlobjCredentialBuilder` object.
     * 
     * @param credentialBuilder `nlobjCredentialBuilder` object to be appended.
     * 
     * @returns An `nlobjCredentialBuilder` object.
     * 
     * @since 2013.2
     */
    append(credentialBuilder: nlobjCredentialBuilder): nlobjCredentialBuilder;

    /**
     * Encodes an nlobjCredentialBuilder object per the base64 scheme.
     * 
     * @returns An `nlobjCredentialBuilder` object.
     * 
     * @since 2013.2
     */
    base64(): nlobjCredentialBuilder;

    /**
     * Hashes an nlobjCredentialBuilder object with the MD5 hash function.
     * 
     * @returns An `nlobjCredentialBuilder` object.
     * 
     * @since 2015.1
     */
    md5(): nlobjCredentialBuilder;

    /**
     * Replaces all instances of `string1` with `string2`.
     * 
     * @param string1 string to be replaced
     * 
     * @param string2 string to be replaced with
     * 
     * @returns An `nlobjCredentialBuilder` object.
     * 
     * @since 2013.2
     */
    replace(string1: string, string2: string): nlobjCredentialBuilder;

    /**
     * Hashes an nlobjCredentialBuilder object with the SHA-1 hash function.
     * 
     * @returns An nlobjCredentialBuilder object.
     * 
     * @since 2013.2
     */
    sha1(): nlobjCredentialBuilder;

    /**
     * Hashes an nlobjCredentialBuilder object with the SHA-256 hash function.
     * 
     * @returns An `nlobjCredentialBuilder` object.
     * 
     * @since 2013.2
     */
    sha256(): nlobjCredentialBuilder;

    /**
     * Encodes an nlobjCredentialBuilder object per the UTF-8 scheme.
     * 
     * @returns An `nlobjCredentialBuilder` object.
     * 
     * @since 2013.2
     */
    utf8(): nlobjCredentialBuilder;
}

/*
   --------------------------------------------------

           DATE APIS

   --------------------------------------------------
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
declare function nlapiAddDays(d: Date, days: number): Date;

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
declare function nlapiAddMonths(d: Date, months: number): Date;

/**
 * Converts a Date object to a string, formats the string based on the format
 * argument passed in, and then returns the formatted string.
 * 
 * @param d Date object being converted into a string
 * 
 * @param format Use one of the following arguments to determine the format of 
 * the returned string. Note that this parameter has no impact on time zone — see 
 * note above. If an argument is not passed in, the date format is used by 
 * default.
 * 
 * - date — formats the string as a date, based on the Date Format selected in 
 * Set Preferences.
 * 
 * - timeofday — formats the string as a time (hour and minutes), based on the 
 * Time Format selected in Set Preferences.
 * 
 * - datetime — formats the string as a concatenation of date and time (hour and 
 * minutes), based on the Date Format and Time Format selected in Set 
 * Preferences
 * 
 * - datetimetz — formats the string as a concatenation of date and time (hour, 
 * minutes and seconds), based on the Date Format and Time Format selected in 
 * Set Preferences
 * 
 * @returns String format of the date that was passed
 */
declare function nlapiDateToString(d: Date, format?: string): string;

/**
 * Converts a string to a Date object, formats the date object based on the 
 * format argument passed in, and then returns the formatted date object. Be 
 * aware that leading zeroes in the month and day values are not supported.
 * 
 * @param str String being converted to a Date.
 * 
 * @param format Use one of the following arguments to indicate the format of 
 * the returned Date object. Note that this parameter has no impact on time zone 
 * — see note above.
 * 
 * - datetime — formats the Date object as a concatenation of date and time 
 * (hour and minutes), based on the Date Format and Time Format selected in 
 * Set Preferences. If you use this format type, your input string must not 
 * include seconds.
 * 
 * - datetimetz — formats the Date object as a concatenation of date and time 
 * (hour, minutes and seconds), based on the Date Format and Time Format 
 * selected in Set Preferences. If you use this format type, your input string 
 * must include seconds.
 * 
 * @returns Date object. Returns NaN if date includes a leading zero.
 */
declare function nlapiStringToDate(str: string, format?: string): Date | number;

/*
   --------------------------------------------------

           TIMEZONE APIS

   --------------------------------------------------
*/

/**
 * This API returns the value of a datetime field on the currently selected line 
 * of a sublist. If timeZone is passed in, the datetime value is converted to 
 * that time zone and then returned. If timeZone is not passed in, the datetime 
 * value is returned in the default time zone.
 * 
 * @param type The internal sublist ID
 * 
 * @param fieldId The internal field ID. This field ID must point to a datetime 
 * formatted field.
 * 
 * @param timeZone If a string is passed in, it must match one of the Olson 
 * Values listed in the 
 * [Olson Values](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_3727261949.html) 
 * table (values are case-insensitive). If an integer is passed in, it must 
 * match one of the Key values listed in the 
 * [Olson Values](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_3727261949.html) 
 * table.
 * 
 * @returns The string value of a Date/Time field on the currently selected 
 * line.
 * 
 * @throws SSS_INVALID_ARG_TYPE
 * 
 * @since 2013.2
 */
declare function nlapiGetCurrentLineItemDateTimeValue(
    type: string, fieldId: string, timeZone?: string | number
): string;

/**
 * This API returns the value of a datetime field. If timeZone is passed in, the 
 * datetime value is converted to that time zone and then returned. If timeZone 
 * is not passed in, the datetime value is returned in the default time zone.
 * 
 * @param fieldId The internal field ID. This field ID must point to a datetime 
 * formatted field.
 * 
 * @param timeZone If a string is passed in, it must match one of the Olson 
 * Values listed in the 
 * [Olson Values](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_3727261949.html) 
 * table (values are case-insensitive). If an integer is passed in, it must 
 * match one of the Key values listed in the 
 * [Olson Values](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_3727261949.html) 
 * table.
 * 
 * @throws SSS_INVALID_ARG_TYPE
 * 
 * @since 2013.2
 */
declare function nlapiGetDateTimeValue(
    fieldId: string, timeZone?: string | number
): string;


/**
 * This API returns the value of a datetime field on a sublist. If timeZone is 
 * passed in, the datetime value is converted to that time zone and then 
 * returned. If timeZone is not passed in, the datetime value is returned in the 
 * default time zone.
 * 
 * @param type The internal sublist ID
 * 
 * @param fieldId The internal field ID. The field ID passed in must point to a 
 * datetime formatted field.
 * 
 * @param lineNum The line number for this field. Note the first line number on 
 * a sublist is 1 (not 0).
 * 
 * @param timeZone If a string is passed in, it must match one of the Olson 
 * Values listed in the 
 * [Olson Values](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_3727261949.html) 
 * table (values are case-insensitive). If an integer is passed in, it must 
 * match one of the Key values listed in the 
 * [Olson Values](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_3727261949.html) 
 * table.
 * 
 * @returns The string value of a datetime field on a sublist.
 * 
 * @throws SSS_INVALID_ARG_TYPE
 * 
 * @since 2013.2
 */
declare function nlapiGetLineItemDateTimeValue(
    type: string,
    fieldId: string,
    lineNum: number,
    timeZone?: string | number
): string;

/**
 * This API sets the value of a datetime field on the currently selected line of 
 * a sublist. If timeZone is passed in, the datetime value is converted to that 
 * time zone and then set. If timeZone is not passed in, the datetime value is 
 * set in the default time zone.
 * 
 * @param type The internal sublist ID
 * 
 * @param fieldId The internal field ID. The field ID passed in must point to a 
 * datetime formatted field.
 * 
 * @param dateTime The date and time in format mm/dd/yyyy hh:mm:ss am|pm (for 
 * example, ‘09/25/2013 06:00:01 am’).
 * 
 * @param timeZone If a string is passed in, it must match one of the Olson 
 * Values listed in the 
 * [Olson Values](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_3727261949.html) 
 * table (values are case-insensitive). If an integer is passed in, it must 
 * match one of the Key values listed in the 
 * [Olson Values](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_3727261949.html) 
 * table. 
 * 
 * @throws SSS_INVALID_ARG_TYPE
 * 
 * @since 2013.2
 */
declare function nlapiSetCurrentLineItemDateTimeValue(
    type: string,
    fieldId: string,
    dateTime: string,
    timeZone?: string | number
): void;

/**
 * This API sets the value of a datetime field. If timeZone is passed in, the 
 * datetime value is converted from that time zone and then set. If timeZone is 
 * not passed in, the datetime value is set in the default time zone.
 * 
 * @param fieldId The internal field ID. The field ID passed in must point to a 
 * datetime formatted field.
 * 
 * @param dateTime The date and time in format mm/dd/yyyy hh:mm:ss am|pm (for 
 * example, ‘09/25/2013 06:00:01 am’).
 * 
 * @param timeZone If a string is passed in, it must match one of the Olson 
 * Values listed in the 
 * [Olson Values](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_3727261949.html) 
 * table (values are case-insensitive). If an integer is passed in, it must 
 * match one of the Key values listed in the 
 * [Olson Values](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_3727261949.html) 
 * table.
 * 
 * @throws SSS_INVALID_ARG_TYPE
 * 
 * @since 2013.2
 */
declare function nlapiSetDateTimeValue(
    fieldId: string,
    dateTime: string,
    timeZone?: string | number
): void;

/**
 * This API sets the value of a datetime field on a sublist. If timeZone is 
 * passed in, the datetime value is converted to that time zone and then set. 
 * If timeZone is not passed in, the datetime value is set in the default time 
 * zone.
 * 
 * @param type The internal sublist ID
 * 
 * @param fieldId The internal field ID. The field ID passed in must point to a 
 * datetime formatted field.
 * 
 * @param lineNum The line number for this field. Note the first line number on 
 * a sublist is 1 (not 0).
 * 
 * @param dateTime The date and time in format mm/dd/yyyy hh:mm:ss am|pm (for 
 * example, ‘09/25/2013 06:00:01 am’).
 * 
 * @param timeZone If a string is passed in, it must match one of the Olson 
 * Values listed in the 
 * [Olson Values](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_3727261949.html) 
 * table (values are case-insensitive). If an integer is passed in, it must 
 * match one of the Key values listed in the 
 * [Olson Values](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_3727261949.html) 
 * table.
 * 
 * @throws SSS_INVALID_ARG_TYPE
 * 
 * @since 2013.2
 */
declare function nlapiSetLineItemDateTimeValue(
    type: string,
    fieldId: string,
    lineNum: number,
    dateTime: string,
    timeZone?: string | number
): void;

/*
   --------------------------------------------------

           CURRENCY APIS

   --------------------------------------------------
*/

/**
 * Use this API to get the exchange rate between two currencies based on a 
 * certain date. The exchange rate values you are getting are those that appear 
 * in the Exchange Rate column of the Currency Exchange Rates record
 * 
 * @param sourceCurrency The currency internal ID or symbol. For example, you 
 * can use either 1 (currency ID) or USD (currency symbol). If you have the 
 * Multiple Currencies feature enabled in your account, you can see all currency 
 * IDs and symbols by going to Lists > Accounting > Currencies (Administrator).
 * 
 * @param targetCurrency The currency internal ID or symbol.
 * 
 * @param effectiveDate If not supplied, then effectiveDate defaults to the 
 * current date.
 * 
 * @returns The exchange rate (as a decimal number) in the same precision that 
 * is displayed in the NetSuite UI.
 * 
 * @throws SSS_INVALID_CURRENCY_ID (if an invalid currency (from or to) is 
 * specified)
 * 
 * @since 2009.1
 */
declare function nlapiExchangeRate(
    sourceCurrency: string | number,
    targetCurrency: string | number,
    effectiveDate?: string | number
): number;

/**
 * Formats a String into a currency field value
 * 
 * @param str String being formatted into currency
 */
declare function nlapiFormatCurrency(str: string): string;

/*
   --------------------------------------------------

           ENCRYPTION APIS

   --------------------------------------------------
*/

/**
 * Encodes, encrypts, or obfuscates a clear text string.
 * 
 * @param s The string to encode, obfuscate or encrypt.
 * 
 * @param algorithm The algorithm to use. See table for options.
 * 
 * @param key The secret key that is used for AES encryption. Only applicable 
 * when using the aes algorithm. This string can be a 128–bit, 192–bit, or 
 * 256–bit hex key.
 */
declare function nlapiEncrypt(
    s: string,
    algorithm: 'sha1' | 'aes' | 'base64' | 'xor',
    key?: string
): string;

/*
   --------------------------------------------------

           XML APIS

   --------------------------------------------------
*/

/**
 * Prepares a String for use in XML by escaping XML markup (for example, angle 
 * brackets, quotation marks, and ampersands)
 * 
 * @param text String being escaped
 */
declare function nlapiEscapeXML(text: string): string;

/**
 * XPath expression used to query node
 * @param node XML node being queried
 * 
 * @param xpath XPath expression used to query node
 */
declare function nlapiSelectNode(node: Node, xpath: string): Node;

/**
 * Selects an array of nodes from an XML document using an XPath expression
 * 
 * @param node XML node being queried
 * 
 * @param xpath XPath expression used to query node
 */
declare function nlapiSelectNodes(node: Node, xpath: string): Node[];

/**
 * Selects a value from an XML document using an XPath expression
 * 
 * @param node XML node being queried
 * 
 * @param xpath XPath expression used to query node
 */
declare function nlapiSelectValue(node: Node, xpath: string): string;

/**
 * Selects an array of values from an XML document using an XPath expression
 * 
 * @param node XML node being queried
 * 
 * @param path XPath expression used to query node
 */
declare function nlapiSelectValues(node: Node, path: string): string[];

/**
 * Parses a String into a W3C XML document. This API is useful if you want to 
 * navigate/query a structured XML document more effectively using either the 
 * Document API or NetSuite built-in XPath functions.
 * 
 * @param text String being converted
 */
declare function nlapiStringToXML(text: string): Document;

/**
 * Validates a supplied XML document against a supplied XML Schema (XSD 
 * Document).
 * 
 * The supplied XML Document and XSD Document must be passed in the form of a 
 * W3C Document object. Use nlapiStringToXML(text) to convert both documents 
 * before calling nlapiValidateXML. The location of your source XML Document and 
 * XDS Document does not matter; the validation is performed with the Document 
 * objects stored in memory.
 * 
 * @param xmlDocument XML Document being validated.
 * 
 * @param schemaDocument XML Schema (in the form of an XSD Document) being 
 * validated against.
 * 
 * @param schemaFolderId Only required if the passed XML Schema uses <import> or 
 * <include> tags that reference child schemas by file path (as opposed to 
 * references by URL. To use this parameter, upload the child schema(s) to a 
 * folder in the NetSuite file cabinet. Then pass the folder internal ID as the 
 * schemaFolderId argument. Note that SuiteScript ignores this argument if it is 
 * passed, but not needed.
 * 
 * - SSS_XML_DOES_NOT_CONFORM_TO_SCHEMA — Thrown when the validation fails. See 
 * [XML Validation Output](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3062490.html#bridgehead_3897197502) 
 * for additional information.
 * 
 * - SSS_XML_SCHEMA_MISSING_DEPENDECY_FOLDER_ID — Thrown when an invalid 
 * `schemaFolderId` argument is passed; also thrown when `schemaFolderId` is 
 * required but missing.
 * 
 * @since 2014.1
 */
declare function nlapiValidateXML(
    xmlDocument: Document,
    schemaDocument: Document,
    schemaFolderId?: string
): void;

/**
 * Converts (serializes) an XML document into a String. This API is useful if 
 * you want to serialize and store a Document in a custom field (for example).
 * 
 * @param xml XML document being serialized
 */
declare function nlapiXMLToString(xml: Document): string;

/**
 * Use this API in conjunction with the Big Faceless Report Generator built by 
 * Big Faceless Organization (BFO). The BFO Report Generator is a third-party 
 * library used for converting XML to PDF documents. Using nlapiXMLToPDF in 
 * combination with the BFO report library, SuiteScript developers can now 
 * generate PDF reports from Suitelets.
 * 
 * - The nlapiXMLToPDF API passes XML to the BFO tag library (which is stored by 
 * NetSuite), and returns a PDF nlobjFile object. Note that there is a 10MB 
 * limitation to the size of the file that can be created.
 * 
 * - The following list includes some of the output styles that can be generated 
 * using nlapiXMLToPDF and BFO tags:
 * 
 * - Consolidated data from multiple transactions into one (for example, a 
 * virtual consolidated invoice)
 * 
 * - Highly tailored transaction output with images
 * 
 * - Product labels with bar codes
 * 
 * - Pallet labels with bar codes (custom records)
 * 
 * - Custom-formatted product catalogs with images
 * 
 * - Proposals
 * 
 * @param xmlstring XML
 * 
 * @throws ERROR_PARSING_XML (thrown as a user error when XML is badly formed)
 * 
 * @since 2009.1
 */
declare function nlapiXMLToPDF(xmlstring: string): nlobjFile;

/*
   --------------------------------------------------

           FILE APIS

   --------------------------------------------------
*/
declare function nlapiCreateFile(name, type, contents)
declare function nlapiDeleteFile(id)
declare function nlapiLoadFile(id)
declare function nlapiSubmitFile(file)
/*
   --------------------------------------------------

           ERROR HANDLING APIS

   --------------------------------------------------
*/

/*
   --------------------------------------------------

           COMMUNICATIOn APIS

   --------------------------------------------------
*/

/*
   --------------------------------------------------

           CONFIGURATION APIS

   --------------------------------------------------
*/

/*
   --------------------------------------------------

           SUITEFLOW APIS

   --------------------------------------------------
*/

/*
   --------------------------------------------------

           PORTLET APIS

   --------------------------------------------------
*/

/*
   --------------------------------------------------

           SUITEANALYTICS APIS

   --------------------------------------------------
*/

/*
   --------------------------------------------------

           USER CREDENTIALS APIS

   --------------------------------------------------
*/

/*
   --------------------------------------------------

           JOB MANAGER APIS

   --------------------------------------------------
*/

/*
   -----------------------------------------------------------------------------

                                OBJECT INTERFACES

   -----------------------------------------------------------------------------
*/

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

    /**
     * Use this method to get all fields in an assistant. Regardless of which 
     * page or step the fields have been added to, all fields will be returned. 
     * Also note that where you call this method matters. If you call 
     * `getAllFields()` early in your script, and then add ten more fields at 
     * the end of your script, `getAllFields()` will return only those fields that
     * were added prior to the call.
     * 
     * @returns String[] of all fields in a custom assistant
     * 
     * @since 2009.2
     */
    getAllFields(): string[];

    /**
     * Use this method to get all field groups on an assistant page. Also note
     * that where you call this method matters. If you call
     * `getAllFieldGroups()` early in your script, and then add three more field
     * groups at the end of your script, `getAllFieldGroups()` will return only
     * those field groups that were added prior to the call.
     * 
     * @returns String[] of all field groups in the assistant
     * 
     * @since 2009.2
     */
    getAllFieldGroups(): string[];

    /**
     * Use this method to return an array of all the assistant steps for this
     * assistant.
     * 
     * @since 2009.2
     */
    getAllSteps(): nlobjAssistantStep[];

    /**
     * Use this method to get all sublist names that appear on an assistant 
     * page. Also note that where you call this method matters. If you call 
     * `getAllSubLists()` early in your script, and then add three more sublists
     * at the end of your script, `getAllSubLists()` will return only those
     * sublists that were added prior to the call.
     * 
     * @returns String[] of all sublists in an assistant
     * 
     * @since 2009.2
     */
    getAllSubLists(): string[];

    /**
     * Use this method to get the current step that was set via 
     * `nlobjAssistant.setCurrentStep(step)`. After getting the current step, 
     * you can add fields, field groups, and sublists to the step.
     * 
     * @since 2009.2
     */
    getCurrentStep(): nlobjAssistantStep;

    /**
     * Use this method to return a field on an assistant page.
     * 
     * @param name The internal ID of the field
     * 
     * @since 2009.2
     */
    getField(name: string): nlobjField;

    /**
     * Use this method to return a field group on an assistant page.
     * 
     * @param name The internal ID for the field group
     * 
     * @since 2009.2
     */
    getFieldGroup(name: string): nlobjFieldGroup;

    /**
     * Use this method to get the last submitted action that was performed by
     * the user. Typically you will use
     * [getNextStep()](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3127246.html#bridgehead_N3131132)
     * to determine the next step (based on the last action).
     * 
     * Possible assistant submit actions that can be specified are:
     * 
     * - **next** - means that the user has clicked the Next button in the 
     * assistant
     * 
     * - **back** - means that the user has clicked the Back button
     * 
     * - **cancel** - means that the user has clicked the Cancel button
     * 
     * - **finish** - means that the user has clicked the Finish button. By
     * default, inline text then appears on the finish page saying 
     * “Congratulations! You have completed the <assistant title>” - where 
     * <assistant title> is the title set in 
     * [nlapiCreateAssistant(title, hideHeader)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3056572.html#bridgehead_N3056901) or 
     * nlobjAssistant.[setTitle(title)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3127246.html#bridgehead_N3133383).
     * 
     * - **jump** - if
     * nlobjAssistant.[setOrdered(ordered)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3127246.html#bridgehead_N3132764)
     * has been set to false (meaning that steps can be completed in random
     * order), then **jump** is used to get the user's last action in a 
     * non-sequential process.
     * 
     * @returns The last submit action (as a string)
     * 
     * @since 2009.2
     */
    getLastAction(): string;

    /**
     * Use this method to get the step the last submitted action came from.
     * 
     * @since 2009.2
     */
    getLastStep(): nlobjAssistantStep;

    /**
     * Use this method to return the next logical step corresponding to the
     * user's last submitted action. You should only call this method after you
     * have successfully captured all the information from the last step and are
     * ready to move on to the next step. You would use the return value to set
     * the current step prior to continuing.
     * 
     * @returns Returns the next logical step based on the user's last submit
     * action, assuming there were no errors. Typically you will call
     * [setCurrentStep(step)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3127246.html#bridgehead_N3132050)
     * using the returned step if the submit was successful.
     * 
     * @since 2009.2
     */
    getNextStep(): nlobjAssistantStep;

    /**
     * Use this method to return an 
     * [nlobjAssistantStep](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3137928.html)
     * object on an assistant page.
     * 
     * @param name The internal ID of the step
     * 
     * @since 2009.2
     */
    getStep(name: string): nlobjAssistantStep;

    /**
     * Use this method to get the total number of steps in an assistant.
     * 
     * @returns The total number of steps in an assistant. Value returned as an
     * integer.
     * 
     * @since 2009.2
     */
    getStepCount(): number;

    /**
     * Use this method to return a sublist on an assistant page.
     * 
     * @param name The internal ID for the sublist
     * 
     * @since 2009.2
     */
    getSubList(name: string): nlobjSubList;

    /**
     * Use this method to determine if an assistant has an error message to
     * display for the current step.
     * 
     * @returns Returns true if 
     * [setError(html)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3127246.html#bridgehead_N3132234)
     * was called
     * 
     * @since 2009.2
     */
    hasError(): boolean;

    /**
     * Use this method to determine when all steps in an assistant are completed.
     * 
     * @returns Returns true if all steps in the assistant have been completed 
     * or if 
     * [setFinished(html)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3127246.html#bridgehead_N3132508)
     * has been called.
     */
    isFinished(): boolean;

    /**
     * Use this method to manage redirects in an assistant
     * 
     * @param response The response object
     * 
     * @since 2009.2
     */
    sendRedirect(response: nlobjResponse): void;

    /**
     * Use this method to mark a step as the current step. In the UI, the step
     * will be highlighted when the user is on that step (see figure).
     * 
     * @param step The name of the step object
     * 
     * @since 2009.2
     */
    setCurrentStep(step: nlobjAssistantStep): void;

    /**
     * Use this method to set an error message for the current step. If you
     * choose, you can use HTML tags to format the message.
     * 
     * @param html Error message text
     * 
     * @since 2009.2
     */
    setError(html: string): void;

    /**
     * Use this method to set values for fields on an assistant page.
     * 
     * @param values An associative array containing name/value pairs that map
     * field names to field values
     * 
     * @since 2009.2
     */
    setFieldValues(values: { [key: string]: string }): void;

    /**
     * Use this method to mark the last page in an assistant. Set the rich text
     * to display a completion message on the last page.
     * 
     * @param html The text to display when the assistant has finished. For
     * example, “Congratulations! You have successfully set up your account.”
     * 
     * @since 2009.2
     */
    setFinished(html: string): void;

    /**
     * Use this method to display steps without numbers.
     * 
     * @param hasStepNumber Set to false to turn step numbering off
     * 
     * @since 2010.1
     */
    setNumbered(hasStepNumber?: boolean): void;

    /**
     * Use this method to enforce a sequential ordering of assistant steps. If 
     * steps are ordered, users must complete the current step before the 
     * assistant will allow them to proceed to the next step. From a display 
     * perspective, ordered steps will always appear in the left panel of the 
     * assistant (see first figure). Note that by default, steps in an assistant
     * are ordered.
     * 
     * If steps are unordered, they can be completed in any order. Additionally,
     * unordered steps are always displayed horizontally under the assistant
     * title (see second figure).
     * 
     * @param ordered A value of `true` means steps must be completed 
     * sequentially, and that they will appear vertically in the left panel of
     * the assistant. A value of `false` means steps do not need to be completed
     * sequentially, and they will appear horizontally, directly below the
     * assistant title.
     * 
     * @since 2009.2
     */
    setOrdered(ordered: boolean): void;

    /**
     * Use this method to set the scriptId for a global client script you want
     * to run on an assistant page.
     * 
     * @param script The scriptId of the global client script
     * 
     * @since 2009.2
     */
    setScript(script: string | number): void;

    /**
     * Use this method to show/hide the **Add to Shortcuts** link that appears
     * in the top-right corner of an assistant page. Note that if you do not
     * call this method in your script, the default is to show the Add to
     * Shortcuts link at the top of all assistant pages. Therefore, it is
     * recommended that you use this method only if you want to hide this link.
     * 
     * @param show A value of false means that the Add to Shortcuts link does
     * not appear on the assistant. A value of true means that it will appear.
     * 
     * @since 2009.2
     */
    setShortcut(show: boolean): void;

    /**
     * Use this method to set the splash screen for an assistant page.
     * 
     * @param title The title of the splash screen
     * 
     * @param text1 Text for the splash screen
     * 
     * @param text2 If you want splash content to have a two-column appearance, 
     * provide content in the text2 parameter.
     * 
     * @since 2009.2
     */
    setSplash(title: string, text1: string, text2?: string): void;

    /**
     * Use this method to set the title for the assistant. If you have already 
     * defined the title using 
     * [nlapiCreateAssistant(title, hideHeader)](), you do not need to call the 
     * `setTitle(title)` method. Also note that the title you provide using 
     * `setTitle(title)` will override the title specified in the 
     * `nlapiCreateAssistant()` function.
     * 
     * @param title Assistant title
     * 
     * @since 2009.2
     */
    setTitle(title: string): void;
}

/**
 * Primary object used to encapsulate files (media items) in the NetSuite file
 * cabinet. For an example that shows how to use several the of File object
 * methods to upload a file to the NetSuite file cabinet and also attach the
 * file to a record, see
 * [Uploading Files to the File Cabinet Using SuiteScript](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3087039.html#bridgehead_N3089140)
 * in the NetSuite Help Center.
 */
declare interface nlobjFile {

    /**
     * @returns The string description of the file. This is the description that
     * appears in the Description field on the folder or file record.
     * 
     * @since 2009.1
     */
    getDescription(): string;

    /**
     * Returns the character encoding of a file. NetSuite supports the following
     * encoding types:
     *  
     * - Unicode (UTF-8)
     *  
     * - Western (Windows 1252)
     *  
     * - Western (ISO-8859–1)
     *  
     * - Chinese Simplified (GB 18030)
     *  
     * - Japanese (Shift-JIS)
     *  
     * - Western (Mac Roman)
     *  
     * - Chinese Simplified (GB 2312)
     *  
     * - Chinese Traditional (Big5)
     * 
     * @sicne 2010.1
     */
    getEncoding(): 'UTF-8' | 'windows-1252' | 'ISO-8859-1' | 'GB18030' |
        'SHIFT_JIS' | 'MacRoman' | 'GB2312' | 'Big5'

    /**
     * @returns Integer: The internal ID of the file's folder within the 
     * NetSuite file cabinet, for example **10**, **2**, etc.
     */
    getFolder(): number;

    /**
     * Returns the internal ID of the file (if the file is stored in the
     * NetSuite file cabinet)
     * 
     * @returns The integer value of file ID, for example **8**, **108**, **11**
     * , etc. This is the ID that appears in the Internal ID column next to the
     * file in the file cabinet.
     * 
     * @since 2009.1
     */
    getId(): number;

    /**
     * The string value of the file name
     */
    getName(): string;

    /**
     * Returns the size of the file in bytes
     * 
     * @returns The integer value of the file size
     * 
     * @since 2009.1
     */
    getSize(): number;

    /**
     * Returns the type of the file
     * 
     * @returns The string value of the file type - for example, PDF, CSV, 
     * PLAINTEXT. (For a list of supported file type IDs, see
     * [Supported File Types](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=chapter_N3264137.html)
     * . )
     * 
     * @since 2009.1
     */
    getType(): number;

    /**
     * Returns the URL to the file if it is stored in the NetSuite file cabinet
     * 
     * @returns The URL as a string
     * 
     * @since 2009.1
     */
    getURL(): string;

    /**
     * Returns the contents of the file (base 64 encoded for binary files).
     * 
     * @returns The string value of the file contents
     * 
     * @since 2009.1
     */
    getValue(): string;

    /**
     * @returns Boolean: The file's inactive status as either true or false.
     * Returns true if the file is inactive.
     * 
     * @since 2009.1
     */
    isInactive(): boolean;

    /**
     * @returns Boolean: The file's online status as either true or false. Returns true 
     * if the file is “Available without Login.”
     * 
     * @since 2009.1
     */
    isOnline(): boolean;

    /**
     * Sets the description of the file
     * 
     * @param description A description of the file. This description will
     * appear in the Description field on the folder or file record.
     * 
     * @since 2009.1
     */
    setDescription(description: string): void;

    /**
     * Sets the character encoding of a file. The following types are supported when setting the encoding for new and existing files:
     * 
     * - Unicode (UTF-8)
     * 
     * - Western (Windows 1252)
     * 
     * - Western (ISO-8859–1)
     * 
     * - Chinese Simplified (GB 18030)
     * 
     * - Japanese (Shift-JIS)
     * 
     * - Western (Mac Roman)
     * 
     * The following types are supported when setting the encoding for existing files:
     * 
     * - Chinese Simplified (GB 2312)
     * 
     * - Chinese Traditional (Big5)
     * 
     * @param encodingType The type of encoding for the file. Use one of the following case sensitive values:
     * - UTF-8
     * 
     * - windows-1252
     * 
     * - ISO-8859-1
     * 
     * - GB18030
     * 
     * - SHIFT_JIS
     * 
     * - MacRoman
     * 
     * - GB2312
     * 
     * - Big5
     * 
     * @since 2010.1
     */
    setEncoding(
        encodingType: 'UTF-8' | 'windows-1252' | 'ISO-8859-1' |
            'GB18030' | 'SHIFT_JIS' | 'MacRoman' | 'GB2312' | 'Big5'
    ): void;

    /**
     * Sets the internal ID of the folder that the file is in
     * 
     * @param id The internal ID of the file's folder, for example 
     * **10**, **-4**, **20**, etc.
     * 
     * @since 2009.1
     */
    setFolder(id: number): void;

    /**
     * Sets the file's inactive status. When you inactive a file
     * or folder, it no longer appears on lists unless (in the UI) you have 
     * selected the **Show Inactives** check box.
     * 
     * @param inactive The file's inactive status. Set to true to inactive the 
     * file. Set to false to make the file active.
     * 
     * @since 2009.1
     */
    setIsInactive(inactive: boolean): void;

    /**
     * Sets the file's online (“Available without Login”) status. When a file is
     * online, other users can download the file without a login session. This
     * means you can upload images, MP3, or any other file type to the file
     * cabinet and give other users the file URL without giving them access to
     * the account.
     * 
     * @param online The file's updated online status. Set to true to make the
     * file available online. Set to false if you do not want the file available
     * online.
     * 
     * @since 2009.1
     */
    setIsOnline(online: boolean): void;

    /**
     * Sets the name of the file
     * 
     * @param name The name of the file
     * 
     * @since 2009.1
     */
    setName(name: string): void;
}

declare interface nlobjError {

    /**
     * Returns the error code for this system or user-defined error
     * 
     * @returns The error code as a string
     * 
     * @since 2008.2
     */
    getCode(): string;

    /**
     * Returns the error message (user-defined or system) associated with this 
     * error
     * 
     * @returns The string value of the error message
     * 
     * @since 2008.2
     */
    getDetails(): string;

    /**
     * Returns an error reference ID. If you have included a catch block in your
     * code, you can use getId() to get the internal reference number for an 
     * unexpected error. This method is useful if you want to keep your own log 
     * of error numbers or you want to email the value of getId() to someone else.
     * 
     * Also note that if you have to call Technical Support to help you resolve
     * a SuiteScript issue, this ID may be helpful to your Support rep in
     * diagnosing the problem.
     * 
     * @returns The error ID as a string
     * 
     * @since 2008.2
     */
    getId(): string;

    /**
     * Returns the internal ID of the submitted record if this error was thrown
     * in an **afterSubmit** script
     * 
     * @returns The internal ID of the submitted record as an integer
     */
    getInternalId(): string;

    /**
     * @returns Returns the stacktrace containing the location of the error
     */
    getStackTrace(): string[];

    /**
     * Return the name of the user event script (if applicable) that the error 
     * was thrown from.
     * 
     * @returns The string value of the user event that threw the error - for 
     * example, beforeLoad, beforeSubmit, or afterSubmit
     * 
     * @since 2008.2
     */
    getUserEvent(): string;
}

/**
 * Encapsulates a scriptable email template, which can be merged with one of the
 * following record types:
 * 
 * - Contact
 * 
 * - Case
 * 
 * - Customer
 * 
 * - Employee
 * 
 * - Partner
 * 
 * - Vendor
 * 
 * - All transaction types
 * 
 * - All custom records
 * 
 * To create a new nlobjEmailMerger object, call 
 * [nlapiCreateEmailMerger(templateId)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3027360.html#bridgehead_4183390688).
 * 
 * See 
 * [nlapiCreateEmailMerger(templateId)](https://system.na3.netsuite.com/app/help/helpcenter.nl?fid=section_N3027360.html#bridgehead_4183390688)
 * for a sample script.
 * 
 * The nlobjEmailMerger object is supported in all server-side scripts.
 */
declare interface nlobjEmailMerger {

    /**
     * Use this method to perform a mail merge on an nlobjEmailMerger object
     * (a scriptable e-mail template) and the records designated with the
     * nlobjEmailMerger set methods.
     * 
     * This method has a governance of 20 usage units.
     * 
     * @since 2015.1
     */
    merge(): nlobjMergeResult;

    /**
     * Use this method to designate a custom record to use in a mail merge.
     * 
     * @param recordType the internal ID of the custom record type. For example,
     * “customrecord_telco_customer”.
     * 
     * @param recordId The internal ID of the custom record to use in the mail
     * merge.
     * 
     * @throws SSS_INVALID_TYPE_ARG – Thrown if the recordType argument is
     * invalid or missing.
     * 
     * @since 2015.1
     */
    setCustomRecord(recordType: string, recordId: number): void;

    /**
     * Use this method to designate an entity to use in a mail merge.
     * 
     * @param entityType The record type of the record to use in the mail merge.
     * Use one of the following arguments:
     * 
     * - customer
     * 
     * - contact
     * 
     * - partner
     * 
     * - vendor
     * 
     * - employee
     * 
     * @param entityId The internal ID of the record to use in the mail merge
     * 
     * @throws SSS_INVALID_TYPE_ARG – Thrown if the entityType argument is
     * invalid or missing.
     * 
     * @throws SSS_MERGER_ERROR_OCCURRED – Thrown if the entity cannot be set.
     * 
     * @since 2015.1
     */
    setEntity(entityType: string, entityId: number): void;

    /**
     * Use this method to designate a second entity (as a recipient) to use in a
     * mail merge.
     * 
     * @param recipientType The record type of the record to use in the mail merge. Use one of the following arguments:
     * 
     * - customer
     * 
     * - contact
     * 
     * - partner
     * 
     * - vendor
     * 
     * - employee
     * 
     * @param recipientId The internal ID of the record to use in the mail merge.
     * 
     * @throws SSS_INVALID_TYPE_ARG – Thrown if the recipientType argument is
     * invalid or missing.
     * 
     * @throws SSS_MERGER_ERROR_OCCURRED – Thrown if the recipient cannot be set.
     * 
     * @since 2015.1
     */
    setRecipient(recipientType: string, recipientId: string): void;

    /**
     * Use this method to designate a support case to use in a mail merge.
     * 
     * @param caseId The internal ID of the case record to use in the mail merge.
     * 
     * @since 2015.1
     */
    setSupportCase(caseId: string): void;

    /**
     * Use this method to designate a transaction to use in a mail merge. All
     * transaction types are supported
     * 
     * @param transactionId the internal ID of the transaction record to use in 
     * the mail merge.
     * 
     * @throws SSS_MERGER_ERROR_OCCURRED – Thrown if the transaction cannot be
     * set.
     * 
     * @since 2015.1
     */
    setTransaction(transactionId: number): void;
}

/**
 * The nlobjMergeResult object is supported in all server-side scripts.
 */
declare interface nlobjMergeResult {

    /**
     * Use this method to get the body of the email distribution in string
     * format.
     * 
     * @since 2015.1
     */
    getBody(): string;

    /**
     * Use this method to get the subject of the email distribution in string
     * format.
     * 
     * @since 2015.1
     */
    getSubject(): string;
}


/*
   -----------------------------------------------------------------------------

                                OBJECT CLASSES

   -----------------------------------------------------------------------------
*/