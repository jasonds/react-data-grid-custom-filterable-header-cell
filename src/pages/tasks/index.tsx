import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import ReactDataGrid from 'react-data-grid';
import { Data } from 'react-data-grid-addons';
import * as POC from '../../core';
import { AppState } from '../../store';
import { getTasks } from '../../store/task/actions';
import CreateFilterableHeaderCell from '../../components/global/FilterableHeaderCell';
import Grid from '../../components/global/Grid';
import './index.scss';

interface ITasksProps {
  isLoading: boolean;
  error?: POC.Models.POCError;
  tasks?: POC.Models.Task[];

  dispatchGetTasks(): () => Promise<void>;
}

const Tasks: React.FC<ITasksProps> = props => {
  const { isLoading, error, tasks, dispatchGetTasks } = props;

  // Define columns
  const columns = [
    {
      key: 'id',
      name: 'ID',
      editable: false,
      width: 80
    },
    {
      key: 'order',
      name: 'Order',
      editable: false,
      width: 80
    },
    {
      key: 'title',
      name: 'Title',
      editable: false,
      width: 500
    },
    {
      key: 'description',
      name: 'Description',
      editable: false,
      filterable: true,

      // Omit the filterRenderer property to use the default renderer found here:
      // https://github.com/adazzle/react-data-grid/blob/master/packages/common/cells/headerCells/FilterableHeaderCell.js
      filterRenderer: CreateFilterableHeaderCell(['/'])
    }
  ] as AdazzleReactDataGrid.Column<POC.Models.Task>[];

  // Get tasks
  useEffect(() => {
    dispatchGetTasks();
  }, [dispatchGetTasks]);

  if (isLoading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>Error occurred...</p>;
  } else if (tasks && tasks.length > 0) {
    return (
      <React.Fragment>
        <section>
          <div className="heading_block">
            <div className="top_wrap">
              <h2>Tasks</h2>
            </div>
          </div>
          <Grid columns={columns} data={tasks} />
        </section>
      </React.Fragment>
    );
  } else {
    return <p>No tasks found.</p>;
  }
};

const mapStateToProps = (state: AppState) => {
  return {
    isLoading: state.taskState.isLoading,
    error: state.taskState.error,
    tasks: state.taskState.tasks
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  dispatchGetTasks: () => dispatch(getTasks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
