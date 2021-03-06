export default (configContext) => {
  const {
    OP_EQ,
    OP_CONTAIN,
    OP_RANGE,
  } = configContext.searchOperators;

  const {
    defaultAdvancedSearchBooleanOp,
    extensions,
  } = configContext.config;

  return {
    op: defaultAdvancedSearchBooleanOp,
    value: [
      {
        op: OP_CONTAIN,
        path: 'ns2:acquisitions_common/acquisitionReferenceNumber',
      },
      {
        op: OP_RANGE,
        path: 'ns2:acquisitions_common/accessionDateGroup',
      },
      {
        op: OP_RANGE,
        path: 'ns2:acquisitions_common/acquisitionDateGroupList/acquisitionDateGroup',
      },
      {
        op: OP_EQ,
        path: 'ns2:acquisitions_common/acquisitionMethod',
      },
      {
        op: OP_EQ,
        path: 'ns2:acquisitions_common/acquisitionSources/acquisitionSource',
      },
      {
        op: OP_EQ,
        path: 'ns2:acquisitions_common/owners/owner',
      },
      //
      // DVP Custom fields
      //
      {
        op: OP_EQ,
        path: 'ns2:acquisitions_dvp/archivesSpaceRecordId',
      },
      {
        op: OP_EQ,
        path: 'ns2:acquisitions_dvp/restrictionsApply',
      },
      {
        op: OP_EQ,
        path: 'ns2:acquisitions_dvp/publish',
      },
      {
        op: OP_EQ,
        path: 'ns2:acquisitions_dvp/accessRestrictions',
      },
      {
        op: OP_EQ,
        path: 'ns2:acquisitions_dvp/useRestrictions',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
